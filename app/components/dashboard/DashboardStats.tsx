import {
  Activity,
  TrendingUp,
  BarChart3,
  Sparkles,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { dashboardStats } from "../../data/dashboard";

export default function DashboardStats() {
  const totalMetrics =
    dashboardStats.length;

  return (
    <section className="space-y-8">

      {/* Executive Overview */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

        <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-8">

          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                <Sparkles size={16} />
                Analytics Dashboard
              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
                Performance Overview
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
                Monitor publishing activity,
                content performance, audience
                engagement, and growth metrics
                across your blog management platform.
              </p>

            </div>

            {/* Right Summary */}
            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-indigo-200 bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  KPI Metrics
                </p>

                <p className="mt-2 text-3xl font-bold text-indigo-900">
                  {totalMetrics}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Status
                </p>

                <p className="mt-2 text-lg font-bold text-emerald-900">
                  Healthy
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Growth
                </p>

                <p className="mt-2 flex items-center gap-2 text-lg font-bold text-sky-900">
                  <TrendingUp size={18} />
                  Positive
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Analytics Section */}
      <div>

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100">
                <BarChart3
                  size={20}
                  className="text-indigo-700"
                />
              </div>

              Key Performance Metrics
            </h3>

            <p className="mt-2 text-slate-600">
              Real-time statistics and platform performance indicators.
            </p>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {dashboardStats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
            />
          ))}

        </div>

      </div>

      {/* Dashboard Insight */}
      <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
            <Activity
              size={24}
              className="text-sky-700"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-sky-900">
              Analytics Insight
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Monitoring key performance indicators
              helps identify content trends, audience
              engagement patterns, and publishing
              opportunities. Consistent tracking enables
              better editorial and growth decisions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}