// app/api/comments/route.ts

import { NextResponse } from "next/server";

import {
  getAllComments,
  createComment,
} from "../../services/commentService";

export async function GET() {
  try {
    const comments = getAllComments();

    return NextResponse.json(comments, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch comments",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !body.postId ||
      !body.author ||
      !body.content
    ) {
      return NextResponse.json(
        {
          message:
            "Post ID, author, and content are required",
        },
        {
          status: 400,
        }
      );
    }

    const newComment = createComment({
      postId: Number(body.postId),
      author: body.author,
      content: body.content,
    });

    return NextResponse.json(
      {
        message: "Comment created successfully",
        comment: newComment,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create comment",
        error,
      },
      {
        status: 500,
      }
    );
  }
}