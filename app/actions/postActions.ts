// app/actions/postActions.ts

"use server";

import { revalidatePath } from "next/cache";

import {
  createPost,
  updatePost,
  deletePost,
} from "../services/postService";

export async function createPostAction(
  formData: FormData
) {
  try {
    const title = formData
      .get("title")
      ?.toString()
      .trim();

    const category = formData
      .get("category")
      ?.toString()
      .trim();

    const author = formData
      .get("author")
      ?.toString()
      .trim();

    const content = formData
      .get("content")
      ?.toString()
      .trim();

    const tags =
      formData
        .get("tags")
        ?.toString()
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean) || [];

    const image =
      formData
        .get("image")
        ?.toString()
        .trim() ||
      "/images/placeholder.jpg";

    if (
      !title ||
      !category ||
      !author ||
      !content
    ) {
      return {
        success: false,
        message:
          "All required fields must be completed.",
      };
    }

    if (title.length < 5) {
      return {
        success: false,
        message:
          "Post title must contain at least 5 characters.",
      };
    }

    if (content.length < 20) {
      return {
        success: false,
        message:
          "Post content must contain at least 20 characters.",
      };
    }

    createPost({
      title,
      category,
      author,
      content,
      tags,
      image,
    });

    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/posts");

    return {
      success: true,
      message:
        "Post created successfully.",
    };
  } catch (error) {
    console.error(
      "Create Post Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while creating the post.",
    };
  }
}

export async function updatePostAction(
  id: number,
  formData: FormData
) {
  try {
    const title = formData
      .get("title")
      ?.toString()
      .trim();

    const category = formData
      .get("category")
      ?.toString()
      .trim();

    const author = formData
      .get("author")
      ?.toString()
      .trim();

    const content = formData
      .get("content")
      ?.toString()
      .trim();

    const tags =
      formData
        .get("tags")
        ?.toString()
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean) || [];

    const image =
      formData
        .get("image")
        ?.toString()
        .trim() ||
      "/images/placeholder.jpg";

    if (
      !title ||
      !category ||
      !author ||
      !content
    ) {
      return {
        success: false,
        message:
          "All required fields must be completed.",
      };
    }

    const updatedPost = updatePost(id, {
      title,
      category,
      author,
      content,
      tags,
      image,
    });

    if (!updatedPost) {
      return {
        success: false,
        message:
          "Post not found.",
      };
    }

    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/posts");
    revalidatePath(
      `/dashboard/posts/edit/${id}`
    );
    revalidatePath(`/blog/${id}`);

    return {
      success: true,
      message:
        "Post updated successfully.",
    };
  } catch (error) {
    console.error(
      "Update Post Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while updating the post.",
    };
  }
}

export async function deletePostAction(
  id: number
) {
  try {
    const deleted = deletePost(id);

    if (!deleted) {
      return {
        success: false,
        message:
          "Post not found.",
      };
    }

    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/posts");

    return {
      success: true,
      message:
        "Post deleted successfully.",
    };
  } catch (error) {
    console.error(
      "Delete Post Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while deleting the post.",
    };
  }
}