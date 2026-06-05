// app/api/comments/route.ts

import { NextResponse } from "next/server";

import {
  getAllComments,
  createComment,
} from "../../services/commentService";

export async function GET() {
  try {
    const comments =
      getAllComments();

    return NextResponse.json(
      {
        success: true,
        count: comments.length,
        data: comments,
        timestamp:
          new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Fetch Comments Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch comments.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const postId = Number(
      body?.postId
    );

    const author = body?.author
      ?.toString()
      .trim();

    const content =
      body?.content
        ?.toString()
        .trim();

    if (
      !postId ||
      !author ||
      !content
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Post ID, author, and content are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (author.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Author name must contain at least 2 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (content.length < 5) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Comment content must contain at least 5 characters.",
        },
        {
          status: 400,
        }
      );
    }

    const newComment =
      createComment({
        postId,
        author,
        content,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Comment created successfully.",
        data: newComment,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Create Comment Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create comment.",
      },
      {
        status: 500,
      }
    );
  }
}