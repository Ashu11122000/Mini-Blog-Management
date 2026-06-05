import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  FileText,
  Hash,
} from "lucide-react";

import { Post } from "../../types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({
  post,
}: PostCardProps) {
  const readingTime = Math.max(
    1,
    Math.ceil(post.content.split(" ").length / 200)
  );

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200/80
        bg-white/90
        backdrop-blur-xl
        shadow-[0_15px_50px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_25px_70px_rgba(79,70,229,0.15)]
      "
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-100/30 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      {/* Top Accent */}
      <div
        className="
          h-1.5
          w-full
          bg-linear-to-r
          from-violet-500
          via-indigo-500
          to-cyan-500
        "
      />

      {/* Featured Image */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-linear-to-br
            from-violet-500
            via-indigo-500
            to-cyan-500
            opacity-90
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent)]
          "
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <FileText
            size={54}
            className="text-slate-100"
          />
        </div>

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-white/15
              px-3
              py-1
              text-xs
              font-semibold
              tracking-wide
              text-slate-100
              backdrop-blur-md
            "
          >
            {post.category}
          </span>
        </div>

        {/* Post ID */}
        <div className="absolute right-5 top-5">
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-white/20
              bg-white/15
              px-3
              py-1
              text-xs
              font-semibold
              text-slate-100
              backdrop-blur-md
            "
          >
            <Hash size={12} />
            {post.id}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Meta */}
        <div className="mb-4 flex items-center gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1">
            <Clock3 size={14} />
            {readingTime} min read
          </div>

          <div>
            {post.content.length} characters
          </div>
        </div>

        {/* Title */}
        <h2
          className="
            text-2xl
            font-bold
            leading-tight
            text-slate-900
            transition-all
            duration-300
            group-hover:bg-linear-to-r
            group-hover:from-violet-600
            group-hover:to-indigo-600
            group-hover:bg-clip-text
            group-hover:text-transparent
          "
        >
          {post.title}
        </h2>

        {/* Divider */}
        <div
          className="
            my-5
            h-px
            bg-linear-to-r
            from-slate-200
            via-slate-300
            to-transparent
          "
        />

        {/* Preview */}
        <p
          className="
            line-clamp-4
            leading-7
            text-slate-600
          "
        >
          {post.content.length > 180
            ? `${post.content.slice(
                0,
                180
              )}...`
            : post.content}
        </p>

        {/* Bottom Area */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Content Article
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Published Blog Post
            </p>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-linear-to-r
              from-violet-600
              via-indigo-600
              to-cyan-500
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-50
              shadow-lg
              shadow-indigo-500/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-indigo-500/30
            "
          >
            Read Article

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}