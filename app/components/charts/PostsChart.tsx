// components/charts/PostsChart.tsx

import {
  FileText,
  Clock3,
  TrendingUp,
  Layers3,
} from "lucide-react";

import { getRecentPosts } from "../../services/analyticsService";

export default function PostsChart() {
  const posts = getRecentPosts();

  if (posts.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
            <FileText
              size={30}
              className="text-indigo-700"
            />
          </div>

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            No Recent Posts
          </h3>

          <p className="mt-2 text-slate-600">
            Published articles will appear here
            once content starts growing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="border-b border-slate-200 bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100">
              <FileText
                size={24}
                className="text-indigo-700"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Posts
              </h2>

              <p className="text-sm text-slate-600">
                Latest published content activity
              </p>
            </div>

          </div>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2">
            <TrendingUp
              size={16}
              className="text-indigo-600"
            />

            <span className="text-sm font-medium text-indigo-700">
              Live Feed
            </span>
          </div>

        </div>

      </div>

      <div className="p-6">

        {/* Summary */}
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Recent Activity
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-900">
            {posts.length}
          </p>

          <p className="mt-1 text-sm text-slate-600">
            Recently published articles
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-4">

          {posts.map((post, index) => (
            <div
              key={post.id}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/70
                p-5
                transition-all
                duration-300
                hover:border-indigo-300
                hover:bg-white
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                  {/* Ranking */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-100 to-violet-100 text-sm font-bold text-indigo-700">
                    #{index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-indigo-700">
                      {post.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">

                      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                        <Layers3 size={12} />
                        {post.category}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                        <Clock3 size={12} />
                        Recent
                      </span>

                    </div>
                  </div>

                </div>

                <div className="hidden md:block text-right">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Status
                  </p>

                  <p className="font-semibold text-emerald-700">
                    Published
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Footer Insight */}
        <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-4">

          <h3 className="font-semibold text-sky-900">
            Publishing Insight
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Recent content activity helps track
            publishing consistency and engagement
            opportunities. Maintaining a steady
            publishing schedule can improve audience
            retention and search visibility.
          </p>

        </div>

      </div>

    </div>
  );
}