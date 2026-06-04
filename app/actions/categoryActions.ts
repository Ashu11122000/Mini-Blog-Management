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
    const name = formData.get("name") as string;
    const description = formData.get(
      "description"
    ) as string;

    if (!name || !description) {
      return {
        success: false,
        message: "Name and description are required",
      };
    }

    createCategory({
      name,
      description,
    });

    revalidatePath("/dashboard/categories");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Category created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create category",
    };
  }
}

export async function updateCategoryAction(
  id: number,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get(
      "description"
    ) as string;

    const updatedCategory = updateCategory(id, {
      name,
      description,
    });

    if (!updatedCategory) {
      return {
        success: false,
        message: "Category not found",
      };
    }

    revalidatePath("/dashboard/categories");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Category updated successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update category",
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
        message: "Category not found",
      };
    }

    revalidatePath("/dashboard/categories");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Category deleted successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete category",
    };
  }
}