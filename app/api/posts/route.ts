// app/api/posts/route.ts

import { NextResponse } from "next/server";

import {
  getAllPosts,
  createPost,
} from "../../services/postService";

export async function GET() {
  try {
    const posts = getAllPosts();

    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch posts",
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

    const newPost = createPost({
      title: body.title,
      category: body.category,
      author: body.author,
      content: body.content,
      tags: body.tags || [],
      image: body.image || "/images/placeholder.jpg",
    });

    return NextResponse.json(
      {
        message: "Post created successfully",
        post: newPost,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create post",
        error,
      },
      {
        status: 500,
      }
    );
  }
}