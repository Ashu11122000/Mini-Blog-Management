// app/api/analytics/route.ts

import { NextResponse } from "next/server";

import {
  getAnalyticsSummary,
} from "../../services/analyticsService";

export async function GET() {
  try {
    const analytics =
      getAnalyticsSummary();

    return NextResponse.json(
      {
        success: true,
        data: analytics,
        timestamp:
          new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Analytics API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch analytics data.",
      },
      {
        status: 500,
      }
    );
  }
}