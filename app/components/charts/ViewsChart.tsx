// components/charts/ViewsChart.tsx

import {
  Eye,
  TrendingUp,
  Trophy,
  BarChart3,
} from "lucide-react";

import { getMostViewedPosts } from "../../services/analyticsService";

export default function ViewsChart() {
  const posts = getMostViewedPosts();

  const maxViews = Math.max(
    ...posts.map((post) => post.views),
    1
  );

  const totalViews = posts.reduce(
    (sum, post) => sum + post.views,
    0
  );

  const topPost = posts[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="border-b border-slate-200 bg-linear-to-r from-sky-50 via-indigo-50 to-violet-50 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-100 to-indigo-100">
              <BarChart3
                size={24}
                className="text-sky-700"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Most Viewed Posts
              </h2>

              <p className="text-sm text-slate-600">
                Content performance analytics
              </p>
            </div>

          </div>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2">
            <TrendingUp
              size={16}
              className="text-sky-600"
            />
            <span className="text-sm font-medium text-sky-700">
              Performance
            </span>
          </div>

        </div>

      </div>

      <div className="p-6">

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              Total Views
            </p>

            <p className="mt-2 text-3xl font-bold text-sky-900">
              {totalViews.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Top Performer
            </p>

            <p className="mt-2 text-lg font-bold text-amber-900 truncate">
              {topPost?.title || "N/A"}
            </p>
          </div>

        </div>

        {/* Rankings */}
        <div className="space-y-6">

          {posts.map((post, index) => {
            const percentage =
              (post.views / maxViews) * 100;

            return (
              <div
                key={post.id}
                className="group"
              >
                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        flex h-9 w-9 items-center justify-center
                        rounded-xl text-sm font-bold
                        ${
                          index === 0
                            ? "bg-amber-100 text-amber-700"
                            : "bg-indigo-100 text-indigo-700"
                        }
                      `}
                    >
                      {index === 0 ? (
                        <Trophy size={16} />
                      ) : (
                        `#${index + 1}`
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {post.title}
                      </p>

                      <p className="text-xs text-slate-500">
                        Content Performance
                      </p>
                    </div>

                  </div>

                  <div className="text-right">

                    <div className="flex items-center gap-2 justify-end">
                      <Eye
                        size={14}
                        className="text-sky-600"
                      />

                      <span className="font-bold text-slate-900">
                        {post.views.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">
                      Views
                    </p>

                  </div>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-linear-to-r
                      from-sky-500
                      via-indigo-500
                      to-violet-500
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <div className="mt-2 flex justify-between text-xs text-slate-500">

                  <span>
                    {(
                      (post.views /
                        totalViews) *
                      100
                    ).toFixed(1)}
                    % of total views
                  </span>

                  <span>
                    Relative Score:{" "}
                    {percentage.toFixed(0)}%
                  </span>

                </div>
              </div>
            );
          })}

        </div>

        {/* Top Performer Card */}
        {topPost && (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-linear-to-r from-amber-50 to-yellow-50 p-5">

            <div className="flex items-start gap-3">

              <Trophy
                size={22}
                className="mt-1 text-amber-700"
              />

              <div>
                <h3 className="font-bold text-amber-900">
                  Best Performing Content
                </h3>

                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">
                    {topPost.title}
                  </span>{" "}
                  currently leads with{" "}
                  <span className="font-bold text-amber-700">
                    {topPost.views.toLocaleString()}
                  </span>{" "}
                  views and represents your highest
                  performing article.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Insight */}
        <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">

          <h3 className="font-semibold text-indigo-900">
            Analytics Insight
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Monitoring top-performing posts helps
            identify successful content topics,
            improve editorial strategy, and discover
            opportunities for future content growth.
          </p>

        </div>

      </div>

    </div>
  );
}