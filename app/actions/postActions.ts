// app/actions/postActions.ts

"use server";

import { revalidatePath } from "next/cache";

import {
  createPost,
  updatePost,
  deletePost,
} from "../services/postService";

export async function createPostAction(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const content = formData.get("content") as string;

    const tags =
      (formData.get("tags") as string)
        ?.split(",")
        .map((tag) => tag.trim()) || [];

    const image =
      (formData.get("image") as string) ||
      "/images/placeholder.jpg";

    if (!title || !category || !author || !content) {
      return {
        success: false,
        message: "All fields are required",
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

    revalidatePath("/dashboard/posts");
    revalidatePath("/dashboard");
    revalidatePath("/");

    return {
      success: true,
      message: "Post created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create post",
    };
  }
}

export async function updatePostAction(
  id: number,
  formData: FormData
) {
  try {
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const content = formData.get("content") as string;

    const tags =
      (formData.get("tags") as string)
        ?.split(",")
        .map((tag) => tag.trim()) || [];

    const image =
      (formData.get("image") as string) ||
      "/images/placeholder.jpg";

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
        message: "Post not found",
      };
    }

    revalidatePath("/dashboard/posts");
    revalidatePath(`/dashboard/posts/edit/${id}`);
    revalidatePath(`/blog/${id}`);
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Post updated successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update post",
    };
  }
}

export async function deletePostAction(id: number) {
  try {
    const deleted = deletePost(id);

    if (!deleted) {
      return {
        success: false,
        message: "Post not found",
      };
    }

    revalidatePath("/dashboard/posts");
    revalidatePath("/dashboard");
    revalidatePath("/");

    return {
      success: true,
      message: "Post deleted successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete post",
    };
  }
}