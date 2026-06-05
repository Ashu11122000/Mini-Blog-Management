// components/dashboard/CategoryChart.tsx

import {
  FolderTree,
  BarChart3,
  Sparkles,
} from "lucide-react";

import CategoryDistributionChart from "../charts/CategoryDistributionChart";

export default function CategoryChart() {
  return (
    <section className="space-y-6">

      {/* Section Header */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg">

        <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100">
                  <FolderTree
                    size={24}
                    className="text-indigo-700"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Category Analytics
                  </h2>

                  <p className="text-slate-600">
                    Analyze content distribution across
                    categories and identify publishing trends.
                  </p>
                </div>

              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} />
              Content Insights
            </div>

          </div>

        </div>
      </div>

      {/* Chart */}
      <CategoryDistributionChart />

      {/* Insight Card */}
      <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
            <BarChart3
              size={24}
              className="text-sky-700"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-sky-900">
              Category Performance Insight
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Monitoring category distribution helps
              maintain a balanced content strategy.
              Well-distributed content improves reader
              engagement, strengthens SEO performance,
              and prevents over-reliance on a single topic.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}