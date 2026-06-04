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

    const author = formData.get(
      "author"
    ) as string;

    const content = formData.get(
      "content"
    ) as string;

    if (
      !postId ||
      !author ||
      !content
    ) {
      return {
        success: false,
        message:
          "Post ID, author, and content are required",
      };
    }

    createComment({
      postId,
      author,
      content,
    });

    revalidatePath("/dashboard/comments");
    revalidatePath(`/blog/${postId}`);
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Comment created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create comment",
    };
  }
}

export async function updateCommentAction(
  id: number,
  formData: FormData
) {
  try {
    const author = formData.get(
      "author"
    ) as string;

    const content = formData.get(
      "content"
    ) as string;

    const updatedComment = updateComment(
      id,
      {
        author,
        content,
      }
    );

    if (!updatedComment) {
      return {
        success: false,
        message: "Comment not found",
      };
    }

    revalidatePath("/dashboard/comments");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Comment updated successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update comment",
    };
  }
}

export async function deleteCommentAction(
  id: number
) {
  try {
    const deleted = deleteComment(id);

    if (!deleted) {
      return {
        success: false,
        message: "Comment not found",
      };
    }

    revalidatePath("/dashboard/comments");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Comment deleted successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete comment",
    };
  }
}