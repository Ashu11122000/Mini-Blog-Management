// app/api/posts/route.ts

import { NextResponse } from "next/server";

import {
  getAllPosts,
  createPost,
} from "../../services/postService";

export async function GET() {
  try {
    const posts = getAllPosts();

    return NextResponse.json(
      {
        success: true,
        count: posts.length,
        data: posts,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Fetch Posts Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch posts.",
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

    const title = body?.title
      ?.toString()
      .trim();

    const category =
      body?.category
        ?.toString()
        .trim();

    const author = body?.author
      ?.toString()
      .trim();

    const content =
      body?.content
        ?.toString()
        .trim();

    const tags =
      Array.isArray(body?.tags)
        ? body.tags
            .map((tag: string) =>
              tag.trim()
            )
            .filter(Boolean)
        : [];

    const image =
      body?.image?.trim() ||
      "/images/placeholder.jpg";

    if (
      !title ||
      !category ||
      !author ||
      !content
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Title, category, author, and content are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (title.length < 5) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Post title must contain at least 5 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (content.length < 20) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Post content must contain at least 20 characters.",
        },
        {
          status: 400,
        }
      );
    }

    const newPost =
      createPost({
        title,
        category,
        author,
        content,
        tags,
        image,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Post created successfully.",
        data: newPost,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Create Post Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create post.",
      },
      {
        status: 500,
      }
    );
  }
}