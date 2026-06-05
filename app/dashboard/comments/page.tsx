// app/dashboard/comments/page.tsx

import {
  MessageSquare,
  ShieldCheck,
  Activity,
  Users,
} from "lucide-react";

import CommentList from "../../components/comments/CommentList";
import { getAllComments } from "../../services/commentService";

export default function CommentsPage() {
  const comments = getAllComments();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/70
          bg-linear-to-br
          from-white
          via-slate-50
          to-sky-50/40
          p-8
          shadow-lg
          shadow-slate-200/40
        "
      >
        {/* Decorative Glow */}
        <div
          className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            bg-sky-100/60
            blur-3xl
          "
        />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-r
                  from-sky-500
                  to-blue-600
                  text-slate-50
                  shadow-lg
                "
              >
                <MessageSquare size={26} />
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
                  Comments Management
                </h1>

                <p
                  className="
                    mt-2
                    text-slate-600
                  "
                >
                  Monitor, review, and manage
                  community engagement across
                  your blog platform.
                </p>
              </div>
            </div>

            {/* Total Comments */}
            <div
              className="
                rounded-2xl
                border
                border-sky-200/60
                bg-white/80
                px-6
                py-4
                backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-3">
                <MessageSquare
                  size={20}
                  className="text-sky-600"
                />

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Total Comments
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {comments.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moderation Insights */}
      <div
        className="
          grid
          gap-4
          md:grid-cols-3
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <MessageSquare
              size={20}
              className="text-sky-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Total Comments
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {comments.length}
              </h3>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={20}
              className="text-emerald-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Moderation Status
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Healthy
              </h3>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <Activity
              size={20}
              className="text-violet-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Community Activity
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Active
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200/70
          bg-white
          p-6
          shadow-lg
          shadow-slate-200/40
        "
      >
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Users
              size={22}
              className="text-sky-600"
            />

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
              "
            >
              Community Comments
            </h2>
          </div>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
            "
          >
            Review user interactions,
            discussions, and engagement
            activity across all blog posts.
          </p>
        </div>

        <CommentList comments={comments} />
      </div>
    </div>
  );
}