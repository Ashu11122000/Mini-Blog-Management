import {
  FileText,
  Eye,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { recentPosts } from "../../data/dashboard";

export default function RecentPostsTable() {
  const totalViews = recentPosts.reduce(
    (sum, post) => sum + post.views,
    0
  );

  const totalComments = recentPosts.reduce(
    (sum, post) => sum + post.comments,
    0
  );

  return (
    <section className="mt-8 space-y-6">

      {/* Header Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

        <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6">

          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                <Sparkles size={16} />
                Content Management
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Recent Posts
              </h2>

              <p className="mt-2 text-slate-600">
                Monitor recently published articles,
                engagement metrics, and content performance.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-indigo-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Articles
                </p>

                <p className="mt-1 text-2xl font-bold text-indigo-900">
                  {recentPosts.length}
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Views
                </p>

                <p className="mt-1 text-2xl font-bold text-sky-900">
                  {totalViews.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Comments
                </p>

                <p className="mt-1 text-2xl font-bold text-emerald-900">
                  {totalComments}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">

        {/* Table Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Latest Published Articles
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Review content performance and engagement.
            </p>
          </div>

          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-linear-to-r
              from-indigo-600
              via-violet-600
              to-sky-600
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-50
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            View All Posts
            <ArrowRight size={16} />
          </button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Post
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Views
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Comments
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {recentPosts.map((post, index) => (
                <tr
                  key={post.id}
                  className="
                    border-b
                    border-slate-100
                    transition-all
                    duration-200
                    hover:bg-indigo-50/40
                  "
                >

                  {/* Post */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100">
                        <FileText
                          size={20}
                          className="text-indigo-700"
                        />
                      </div>

                      <div>

                        <p className="font-semibold text-slate-900">
                          {post.title}
                        </p>

                        <div className="mt-1 flex items-center gap-2">

                          <span className="text-xs text-slate-500">
                            Post #{post.id}
                          </span>

                          {index === 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                              <TrendingUp size={10} />
                              Trending
                            </span>
                          )}

                        </div>

                      </div>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-indigo-200
                        bg-indigo-50
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-indigo-700
                      "
                    >
                      {post.category}
                    </span>

                  </td>

                  {/* Views */}
                  <td className="px-6 py-5">

                    <div className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2">

                      <Eye
                        size={14}
                        className="text-sky-600"
                      />

                      <span className="font-semibold text-sky-800">
                        {post.views.toLocaleString()}
                      </span>

                    </div>

                  </td>

                  {/* Comments */}
                  <td className="px-6 py-5">

                    <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">

                      <MessageSquare
                        size={14}
                        className="text-emerald-600"
                      />

                      <span className="font-semibold text-emerald-800">
                        {post.comments}
                      </span>

                    </div>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-emerald-200
                        bg-emerald-50
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-emerald-700
                      "
                    >
                      Published
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}