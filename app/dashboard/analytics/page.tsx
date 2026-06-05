// app/dashboard/analytics/page.tsx

import {
  FileText,
  FolderTree,
  MessageSquare,
  Eye,
  TrendingUp,
} from "lucide-react";

import ViewsChart from "../../components/charts/ViewsChart";
import PostsChart from "../../components/charts/PostsChart";
import CategoryDistributionChart from "../../components/charts/CategoryDistributionChart";
import { getDashboardStats } from "../../services/analyticsService";

export default function AnalyticsPage() {
  const stats = getDashboardStats();

  const cards = [
    {
      title: "Total Posts",
      value: stats.totalPosts,
      icon: FileText,
      color:
        "from-indigo-500 to-blue-500",
      description:
        "Published blog articles",
    },
    {
      title: "Categories",
      value: stats.totalCategories,
      icon: FolderTree,
      color:
        "from-emerald-500 to-green-500",
      description:
        "Content classifications",
    },
    {
      title: "Comments",
      value: stats.totalComments,
      icon: MessageSquare,
      color:
        "from-amber-500 to-orange-500",
      description:
        "Community interactions",
    },
    {
      title: "Views",
      value: stats.totalViews,
      icon: Eye,
      color:
        "from-violet-500 to-purple-500",
      description:
        "Total page impressions",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50/50
          p-8
          shadow-lg
        "
      >
        <div
          className="
            absolute
            right-0
            top-0
            h-40
            w-40
            rounded-full
            bg-indigo-100/60
            blur-3xl
          "
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-r
                from-indigo-600
                to-violet-600
                text-slate-50
                shadow-lg
              "
            >
              <TrendingUp size={24} />
            </div>

            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                Analytics Dashboard
              </h1>

              <p
                className="
                  mt-2
                  text-slate-600
                "
              >
                Monitor content performance,
                engagement, growth metrics,
                and audience activity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200/70
                bg-white
                p-6
                shadow-lg
                shadow-slate-200/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div
                className={`
                  absolute
                  top-0
                  left-0
                  h-1
                  w-full
                  bg-linear-to-r
                  ${card.color}
                `}
              />

              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-slate-500
                    "
                  >
                    {card.title}
                  </p>

                  <h2
                    className="
                      mt-3
                      text-4xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {card.value}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-xs
                      text-slate-500
                    "
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-r
                    ${card.color}
                    text-slate-50
                    shadow-lg
                  `}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-lg
          "
        >
          <div className="mb-5">
            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              Traffic Overview
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Track page views and
              audience growth.
            </p>
          </div>

          <ViewsChart />
        </div>

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-lg
          "
        >
          <div className="mb-5">
            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              Content Production
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Monitor publishing trends
              over time.
            </p>
          </div>

          <PostsChart />
        </div>
      </div>

      {/* Category Distribution */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-lg
        "
      >
        <div className="mb-5">
          <h2
            className="
              text-lg
              font-bold
              text-slate-900
            "
          >
            Category Distribution
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
            "
          >
            Understand how content is
            distributed across categories.
          </p>
        </div>

        <CategoryDistributionChart />
      </div>
    </div>
  );
}