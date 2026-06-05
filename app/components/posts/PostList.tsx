import {
  FileText,
  TrendingUp,
  Sparkles,
  Layers3,
} from "lucide-react";

import PostCard from "./PostCard";
import { Post } from "../../types/post";

interface PostListProps {
  posts: Post[];
}

export default function PostList({
  posts,
}: PostListProps) {
  const totalCharacters = posts.reduce(
    (sum, post) => sum + post.content.length,
    0
  );

  if (posts.length === 0) {
    return (
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-dashed
          border-slate-300
          bg-white/80
          p-16
          text-center
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />

          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="mb-6 text-7xl">
            📝
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            No Posts Found
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            There are currently no blog posts
            available. Start publishing articles,
            tutorials, and insights to build your
            content library.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-10">
      {/* Hero Header */}
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/80
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50
          p-8
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        "
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl" />

          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="relative z-10">
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
            Content Discovery Hub
          </div>

          <h2
            className="
              mt-5
              bg-linear-to-r
              from-violet-600
              via-indigo-600
              to-cyan-500
              bg-clip-text
              text-4xl
              font-extrabold
              text-transparent
            "
          >
            Latest Posts
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Explore articles, tutorials,
            announcements, and insights from our
            publishing platform.
          </p>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
            Total Posts
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-600">
              <FileText size={20} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {posts.length}
              </p>

              <p className="text-sm text-slate-500">
                Published Articles
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Content Volume
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
              <Layers3 size={20} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {totalCharacters.toLocaleString()}
              </p>

              <p className="text-sm text-slate-500">
                Total Characters
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Platform Status
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
              <TrendingUp size={20} />
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                Active
              </p>

              <p className="text-sm text-slate-500">
                Publishing Enabled
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Counter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Featured Articles
          </h3>

          <p className="mt-1 text-slate-500">
            Browse the latest content from our
            collection.
          </p>
        </div>

        <div
          className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-indigo-200
            bg-indigo-50
            px-4
            py-2
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />

          <span className="text-sm font-semibold text-indigo-700">
            {posts.length}{" "}
            {posts.length === 1
              ? "Post"
              : "Posts"}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}