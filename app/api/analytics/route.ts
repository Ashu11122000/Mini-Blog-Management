// app/api/analytics/route.ts

import { NextResponse } from "next/server";

import {
  getAnalyticsSummary,
} from "../../services/analyticsService";

export async function GET() {
  try {
    const analytics = getAnalyticsSummary();

    return NextResponse.json(analytics, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch analytics",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
