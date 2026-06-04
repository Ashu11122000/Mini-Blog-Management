// app/api/categories/route.ts

import { NextResponse } from "next/server";

import {
  getAllCategories,
  createCategory,
} from "../../services/categoryService";

export async function GET() {
  try {
    const categories = getAllCategories();

    return NextResponse.json(categories, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
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

    if (!body.name || !body.description) {
      return NextResponse.json(
        {
          message: "Name and description are required",
        },
        {
          status: 400,
        }
      );
    }

    const newCategory = createCategory({
      name: body.name,
      description: body.description,
    });

    return NextResponse.json(
      {
        message: "Category created successfully",
        category: newCategory,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create category",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
