// app/actions/commentActions.ts

"use server";

import { revalidatePath } from "next/cache";

import {
  createComment,
  updateComment,
  deleteComment,
} from "../services/commentService";

export async function createCommentAction(
  formData: FormData
) {
  try {
    const postId = Number(
      formData.get("postId")
    );

    const author = formData
      .get("author")
      ?.toString()
      .trim();

    const content = formData
      .get("content")
      ?.toString()
      .trim();

    if (
      !postId ||
      !author ||
      !content
    ) {
      return {
        success: false,
        message:
          "Post, author, and comment content are required.",
      };
    }

    if (author.length < 2) {
      return {
        success: false,
        message:
          "Author name must contain at least 2 characters.",
      };
    }

    if (content.length < 5) {
      return {
        success: false,
        message:
          "Comment content must contain at least 5 characters.",
      };
    }

    createComment({
      postId,
      author,
      content,
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/comments");
    revalidatePath(`/blog/${postId}`);

    return {
      success: true,
      message:
        "Comment created successfully.",
    };
  } catch (error) {
    console.error(
      "Create Comment Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while creating the comment.",
    };
  }
}

export async function updateCommentAction(
  id: number,
  formData: FormData
) {
  try {
    const author = formData
      .get("author")
      ?.toString()
      .trim();

    const content = formData
      .get("content")
      ?.toString()
      .trim();

    if (!author || !content) {
      return {
        success: false,
        message:
          "Author and comment content are required.",
      };
    }

    const updatedComment =
      updateComment(id, {
        author,
        content,
      });

    if (!updatedComment) {
      return {
        success: false,
        message:
          "Comment not found.",
      };
    }

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/comments");

    return {
      success: true,
      message:
        "Comment updated successfully.",
    };
  } catch (error) {
    console.error(
      "Update Comment Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while updating the comment.",
    };
  }
}

export async function deleteCommentAction(
  id: number
) {
  try {
    const deleted =
      deleteComment(id);

    if (!deleted) {
      return {
        success: false,
        message:
          "Comment not found.",
      };
    }

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/comments");

    return {
      success: true,
      message:
        "Comment deleted successfully.",
    };
  } catch (error) {
    console.error(
      "Delete Comment Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong while deleting the comment.",
    };
  }
}