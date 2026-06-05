// app/api/categories/route.ts

import { NextResponse } from "next/server";

import {
  getAllCategories,
  createCategory,
} from "../../services/categoryService";

export async function GET() {
  try {
    const categories =
      getAllCategories();

    return NextResponse.json(
      {
        success: true,
        count: categories.length,
        data: categories,
        timestamp:
          new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Fetch Categories Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch categories.",
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

    const name = body?.name
      ?.toString()
      .trim();

    const description =
      body?.description
        ?.toString()
        .trim();

    if (
      !name ||
      !description
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Category name and description are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length < 3) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Category name must contain at least 3 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      description.length < 10
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Description must contain at least 10 characters.",
        },
        {
          status: 400,
        }
      );
    }

    const newCategory =
      createCategory({
        name,
        description,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Category created successfully.",
        data: newCategory,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Create Category Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create category.",
      },
      {
        status: 500,
      }
    );
  }
}