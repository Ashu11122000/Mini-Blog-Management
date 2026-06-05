// components/dashboard/QuickActions.tsx

import Link from "next/link";
import {
  PlusCircle,
  FolderKanban,
  BarChart3,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Create Post",
      description:
        "Publish a new blog article and share content with your audience.",
      href: "/dashboard/posts/create",
      icon: PlusCircle,
      color:
        "from-indigo-500 via-violet-500 to-sky-500",
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
    },
    {
      title: "Manage Categories",
      description:
        "Organize content structure and improve content discoverability.",
      href: "/dashboard/categories",
      icon: FolderKanban,
      color:
        "from-emerald-500 via-teal-500 to-green-500",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    {
      title: "View Analytics",
      description:
        "Monitor performance metrics, engagement, and growth insights.",
      href: "/dashboard/analytics",
      icon: BarChart3,
      color:
        "from-violet-500 via-purple-500 to-fuchsia-500",
      bg: "bg-violet-50",
      text: "text-violet-700",
      border: "border-violet-200",
    },
  ];

  return (
    <section className="space-y-6">

      {/* Header */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg">

        <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                <Zap size={16} />
                Productivity Center
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Quick Actions
              </h2>

              <p className="mt-2 text-slate-600">
                Access frequently used tools and manage
                your blog efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/70 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Available Actions
              </p>

              <p className="mt-1 text-3xl font-bold text-sky-900">
                {actions.length}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Action Cards */}
      <div className="grid gap-6 lg:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Hover Gradient */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  bg-linear-to-br
                  ${action.color}
                `}
                style={{
                  opacity: 0.05,
                }}
              />

              <div className="relative">

                {/* Icon */}
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    ${action.border}
                    ${action.bg}
                  `}
                >
                  <Icon
                    size={26}
                    className={action.text}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {action.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {action.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      ${action.bg}
                      ${action.text}
                    `}
                  >
                    Open Tool
                  </span>

                  <ArrowRight
                    size={18}
                    className="
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-slate-700
                    "
                  />

                </div>

              </div>

            </Link>
          );
        })}

      </div>

      {/* Insight Card */}
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">

        <h3 className="text-lg font-bold text-amber-900">
          Productivity Insight
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Quick Actions provide one-click access to
          your most frequently used tools. Using
          shortcuts reduces navigation time and helps
          maintain a more efficient content management
          workflow.
        </p>

      </div>

    </section>
  );
}