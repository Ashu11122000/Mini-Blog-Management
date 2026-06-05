// app/actions/categoryActions.ts

"use server";

import { revalidatePath } from "next/cache";

import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

export async function createCategoryAction(
  formData: FormData
) {
  try {
    const name = formData
      .get("name")
      ?.toString()
      .trim();

    const description = formData
      .get("description")
      ?.toString()
      .trim();

    if (!name || !description) {
      return {
        success: false,
        message:
          "Category name and description are required.",
      };
    }

    if (name.length < 3) {
      return {
        success: false,
        message:
          "Category name must be at least 3 characters long.",
      };
    }

    if (description.length < 10) {
      return {
        success: false,
        message:
          "Description must be at least 10 characters long.",
      };
    }

    createCategory({
      name,
      description,
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/categories");

    return {
      success: true,
      message:
        "Category created successfully.",
    };
  } catch (error) {
    console.error(
      "Create Category Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while creating the category.",
    };
  }
}

export async function updateCategoryAction(
  id: number,
  formData: FormData
) {
  try {
    const name = formData
      .get("name")
      ?.toString()
      .trim();

    const description = formData
      .get("description")
      ?.toString()
      .trim();

    if (!name || !description) {
      return {
        success: false,
        message:
          "Category name and description are required.",
      };
    }

    const updatedCategory = updateCategory(
      id,
      {
        name,
        description,
      }
    );

    if (!updatedCategory) {
      return {
        success: false,
        message:
          "Category not found.",
      };
    }

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/categories");

    return {
      success: true,
      message:
        "Category updated successfully.",
    };
  } catch (error) {
    console.error(
      "Update Category Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while updating the category.",
    };
  }
}

export async function deleteCategoryAction(
  id: number
) {
  try {
    const deleted = deleteCategory(id);

    if (!deleted) {
      return {
        success: false,
        message:
          "Category not found.",
      };
    }

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/categories");

    return {
      success: true,
      message:
        "Category deleted successfully.",
    };
  } catch (error) {
    console.error(
      "Delete Category Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while deleting the category.",
    };
  }
}