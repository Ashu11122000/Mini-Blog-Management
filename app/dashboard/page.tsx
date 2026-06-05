import DashboardStats from "../components/dashboard/DashboardStats";
import RecentPostsTable from "../components/dashboard/RecentPostsTable";
import QuickActions from "../components/dashboard/QuickActions";
import UserProfileCard from "../components/dashboard/UserProfileCard";
import CategoryChart from "../components/dashboard/CategoryChart";

import {
  PlusCircle,
  FileText,
  BarChart3,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="space-y-8">
      {/* Executive Hero */}
      <section
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/20
          bg-linear-to-br
          from-indigo-600
          via-violet-600
          to-purple-700
          p-8
          md:p-10
          text-slate-50
          shadow-[0_30px_80px_rgba(79,70,229,0.35)]
        "
      >
        {/* Ambient Effects */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            {/* Left Side */}
            <div className="max-w-3xl">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  backdrop-blur-sm
                "
              >
                <Sparkles size={15} />
                Dashboard Overview
              </div>

              <h1
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                "
              >
                Welcome Back,
                <span className="block mt-2">
                  Ashish 👋
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-indigo-100
                "
              >
                Monitor performance, publish
                content, manage engagement,
                and scale your blog ecosystem
                from a unified workspace.
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  font-medium
                  text-indigo-200
                "
              >
                {today}
              </p>
            </div>

            {/* Right Side Metrics */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-md
                "
              >
                <Activity
                  size={20}
                  className="mb-3"
                />

                <p className="text-xs uppercase tracking-wider text-indigo-200">
                  Status
                </p>

                <h3 className="mt-2 font-bold">
                  Online
                </h3>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-md
                "
              >
                <TrendingUp
                  size={20}
                  className="mb-3"
                />

                <p className="text-xs uppercase tracking-wider text-indigo-200">
                  Growth
                </p>

                <h3 className="mt-2 font-bold">
                  Positive
                </h3>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-md
                "
              >
                <Sparkles
                  size={20}
                  className="mb-3"
                />

                <p className="text-xs uppercase tracking-wider text-indigo-200">
                  Workspace
                </p>

                <h3 className="mt-2 font-bold">
                  Active
                </h3>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-6
                py-3
                font-semibold
                text-indigo-700
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <PlusCircle size={18} />
              Create New Post
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-6
                py-3
                font-semibold
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              <FileText size={18} />
              Manage Posts
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-6
                py-3
                font-semibold
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              <BarChart3 size={18} />
              View Analytics
            </button>
          </div>
        </div>
      </section>

      {/* KPI Statistics */}
      <DashboardStats />

      {/* Quick Actions */}
      <QuickActions />

      {/* Workspace Section */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div
          className="
            xl:col-span-2
            rounded-4xl
            border
            border-slate-200/70
            bg-white
            p-6
            shadow-[0_15px_50px_rgba(15,23,42,0.05)]
          "
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Recent Content Activity
            </h2>

            <p className="mt-2 text-slate-500">
              Track recently published and
              updated blog posts.
            </p>
          </div>

          <RecentPostsTable />
        </div>

        <div
          className="
            rounded-4xl
            border
            border-slate-200/70
            bg-white
            p-1
            shadow-[0_15px_50px_rgba(15,23,42,0.05)]
          "
        >
          <UserProfileCard />
        </div>
      </div>

      {/* Analytics Section */}
      <div
        className="
          rounded-4xl
          border
          border-slate-200/70
          bg-white
          p-6
          shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        "
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Content Category Analytics
          </h2>

          <p className="mt-2 text-slate-500">
            Understand how content is
            distributed across categories.
          </p>
        </div>

        <CategoryChart />
      </div>
    </div>
  );
}