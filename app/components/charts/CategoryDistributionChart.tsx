// components/charts/CategoryDistributionChart.tsx

import {
  FolderTree,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import { getPostsPerCategory } from "../../services/analyticsService";

export default function CategoryDistributionChart() {
  const data = getPostsPerCategory();

  const maxCount = Math.max(
    ...data.map((item) => item.count),
    1
  );

  const totalPosts = data.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="border-b border-slate-200 bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100">
              <BarChart3
                size={24}
                className="text-indigo-700"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Category Distribution
              </h2>

              <p className="text-sm text-slate-600">
                Content allocation across categories
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2">
            <TrendingUp
              size={16}
              className="text-indigo-600"
            />
            <span className="text-sm font-medium text-indigo-700">
              Analytics
            </span>
          </div>

        </div>

      </div>

      <div className="p-6">

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Categories
            </p>

            <p className="mt-2 text-3xl font-bold text-indigo-900">
              {data.length}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Total Posts
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-900">
              {totalPosts}
            </p>
          </div>

        </div>

        {/* Chart */}
        <div className="space-y-6">

          {data.map((item, index) => {
            const percentage =
              (item.count / maxCount) * 100;

            return (
              <div
                key={item.category}
                className="group"
              >
                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
                      #{index + 1}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.category}
                      </p>

                      <p className="text-xs text-slate-500">
                        Content Category
                      </p>
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      {item.count}
                    </p>

                    <p className="text-xs text-slate-500">
                      Posts
                    </p>
                  </div>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-linear-to-r
                      from-indigo-500
                      via-violet-500
                      to-sky-500
                      transition-all
                      duration-700
                      ease-out
                    "
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>
                    {(
                      (item.count /
                        totalPosts) *
                      100
                    ).toFixed(1)}
                    % of total content
                  </span>

                  <span>
                    {percentage.toFixed(0)}%
                    relative share
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Insights */}
        <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">

          <div className="flex items-start gap-3">

            <FolderTree
              size={20}
              className="mt-1 text-sky-700"
            />

            <div>
              <h3 className="font-semibold text-sky-900">
                Content Insight
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                This chart shows how blog content is
                distributed across categories. Balanced
                category distribution improves content
                discoverability and creates a better
                reader experience.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}