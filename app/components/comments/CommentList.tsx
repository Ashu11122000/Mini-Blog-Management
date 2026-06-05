"use client";

import {
  MessageSquare,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import CommentCard from "./CommentCard";
import { BlogComment } from "../../types/comment";

interface CommentListProps {
  comments: BlogComment[];
}

export default function CommentList({
  comments,
}: CommentListProps) {
  if (!comments.length) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-12 shadow-xl">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-sky-50 to-violet-50" />

        <div className="relative text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-100 to-violet-100">
            <MessageSquare
              size={38}
              className="text-indigo-700"
            />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-slate-900">
            No Comments Found
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-slate-600 leading-relaxed">
            Comments will appear here once readers begin
            interacting with your content. Community
            engagement helps build trust, increase
            retention, and create meaningful discussions.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700">
            <Sparkles size={16} />
            Waiting for community engagement
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Dashboard Header */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg">

        <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6 border-b border-slate-200">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <MessageSquare
                  size={28}
                  className="text-indigo-700"
                />

                <h2 className="text-3xl font-bold text-slate-900">
                  Community Comments
                </h2>
              </div>

              <p className="mt-2 text-slate-600">
                Monitor reader engagement and community
                discussions across your blog.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Total Comments
                </p>

                <p className="mt-1 text-3xl font-bold text-indigo-900">
                  {comments.length}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Engagement
                </p>

                <p className="mt-1 flex items-center gap-2 text-lg font-bold text-emerald-900">
                  <TrendingUp size={18} />
                  Active
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Comments Grid */}
      <div className="grid gap-6">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>

      {/* Insights Panel */}
      <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
            <Users
              size={24}
              className="text-sky-700"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-sky-900">
              Community Insight
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Reader comments provide valuable feedback
              and help build a stronger community around
              your content. Engaged audiences are more
              likely to return, share content, and
              contribute meaningful discussions.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}