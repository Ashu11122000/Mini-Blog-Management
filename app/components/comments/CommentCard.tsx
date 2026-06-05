"use client";

import {
  MessageSquare,
  CalendarDays,
  User,
  Hash,
} from "lucide-react";

import { BlogComment } from "../../types/comment";

interface CommentCardProps {
  comment: BlogComment;
}

export default function CommentCard({
  comment,
}: CommentCardProps) {
  const initials = comment.author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
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
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50/40 via-sky-50/20 to-violet-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-md">
              {initials}
            </div>

            {/* Author */}
            <div>

              <div className="flex items-center gap-2">
                <User
                  size={16}
                  className="text-indigo-600"
                />

                <h3 className="text-lg font-bold text-slate-900">
                  {comment.author}
                </h3>
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={14} />
                <span>{comment.createdAt}</span>
              </div>

            </div>

          </div>

          {/* Post Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-200
              bg-indigo-50
              px-4
              py-2
              text-xs
              font-semibold
              text-indigo-700
            "
          >
            <Hash size={12} />
            Post #{comment.postId}
          </span>

        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

        {/* Comment Content */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">

          <div className="mb-3 flex items-center gap-2">
            <MessageSquare
              size={16}
              className="text-sky-600"
            />

            <span className="text-sm font-semibold text-sky-700">
              Reader Comment
            </span>
          </div>

          <p className="leading-relaxed text-slate-700">
            {comment.content}
          </p>

        </div>

        {/* Footer Stats */}
        <div className="mt-5 flex flex-wrap gap-3">

          <span
            className="
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-3
              py-1
              text-xs
              font-medium
              text-emerald-700
            "
          >
            Active Discussion
          </span>

          <span
            className="
              rounded-full
              border
              border-sky-200
              bg-sky-50
              px-3
              py-1
              text-xs
              font-medium
              text-sky-700
            "
          >
            Community Feedback
          </span>

        </div>

      </div>
    </div>
  );
}