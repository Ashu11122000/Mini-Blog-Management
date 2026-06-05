import {
  FileText,
  Activity,
  Sparkles,
  TrendingUp,
  PenSquare,
  Layers3,
} from "lucide-react";

import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../services/postService";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      {/* Executive Hero */}
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/70
          bg-white/80
          p-8
          md:p-10
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(15,23,42,0.08)]
        "
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-white to-cyan-50" />

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            {/* Left */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-violet-200
                  bg-violet-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-violet-700
                "
              >
                <Sparkles size={16} />
                Content Operations Center
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  tracking-tight
                  bg-linear-to-r
                  from-violet-600
                  via-indigo-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                All Posts
              </h1>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Manage, optimize, and organize
                all blog content from a single
                publishing workspace designed
                for modern content operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-3xl
                  border
                  border-violet-200
                  bg-white/80
                  px-6
                  py-5
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={20}
                    className="text-violet-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Total Posts
                    </p>

                    <h3 className="text-3xl font-bold text-violet-700">
                      {posts.length}
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-emerald-200
                  bg-white/80
                  px-6
                  py-5
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center gap-3">
                  <Activity
                    size={20}
                    className="text-emerald-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Status
                    </p>

                    <h3 className="font-bold text-emerald-700">
                      Active
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <PenSquare
            size={24}
            className="mb-4 text-violet-600"
          />

          <h3 className="font-bold text-slate-900">
            Content Creation
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Write and publish articles with
            a streamlined workflow.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <Layers3
            size={24}
            className="mb-4 text-cyan-600"
          />

          <h3 className="font-bold text-slate-900">
            Organization
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Structure content efficiently
            using categories and metadata.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <TrendingUp
            size={24}
            className="mb-4 text-emerald-600"
          />

          <h3 className="font-bold text-slate-900">
            Performance
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Track growth and engagement
            across published content.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <Sparkles
            size={24}
            className="mb-4 text-amber-600"
          />

          <h3 className="font-bold text-slate-900">
            Publishing Ready
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Built for modern content teams
            and scalable workflows.
          </p>
        </div>
      </div>

      {/* Workspace Banner */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-linear-to-r
          from-slate-50
          via-white
          to-indigo-50
          p-5
          shadow-sm
        "
      >
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-sm font-semibold text-slate-700">
            Content Workspace Active
          </span>

          <div className="h-4 w-px bg-slate-300" />

          <span className="text-sm text-slate-500">
            Create • Edit • Organize • Publish • Analyze
          </span>
        </div>
      </div>

      {/* Posts Container */}
      <div
        className="
          rounded-4xl
          border
          border-slate-200/70
          bg-white/70
          p-6
          backdrop-blur-xl
          shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        "
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Content Library
          </h2>

          <p className="mt-2 text-slate-500">
            Browse and manage all available
            blog posts from your publishing
            dashboard.
          </p>
        </div>

        <PostList posts={posts} />
      </div>
    </div>
  );
}