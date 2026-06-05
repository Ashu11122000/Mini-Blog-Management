import CreatePostForm from "../../../components/posts/CreatePostForm";
import {
  PenSquare,
  FileText,
  Sparkles,
  TrendingUp,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function CreatePostPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Hero Section */}
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
            {/* Left Side */}
            <div className="max-w-3xl">
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
                Content Creation Studio
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  font-bold
                  tracking-tight
                  md:text-5xl
                  lg:text-6xl
                  bg-linear-to-r
                  from-violet-600
                  via-indigo-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Create New Post
              </h1>

              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Craft engaging articles, tutorials,
                case studies, and insights that
                resonate with your audience and
                strengthen your content strategy.
              </p>
            </div>

            {/* Publishing Status */}
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
                  <PenSquare
                    size={20}
                    className="text-violet-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Status
                    </p>

                    <h3 className="font-bold text-violet-700">
                      Draft Mode
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-cyan-200
                  bg-white/80
                  px-6
                  py-5
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={20}
                    className="text-cyan-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Content
                    </p>

                    <h3 className="font-bold text-cyan-700">
                      New Article
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
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <PenSquare
            className="mb-4 text-violet-600"
            size={24}
          />

          <h3 className="font-semibold text-slate-900">
            Engaging Title
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Headlines influence click-through
            rates and reader engagement.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <FileText
            className="mb-4 text-cyan-600"
            size={24}
          />

          <h3 className="font-semibold text-slate-900">
            Quality Content
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Provide actionable value and
            maintain strong readability.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <TrendingUp
            className="mb-4 text-emerald-600"
            size={24}
          />

          <h3 className="font-semibold text-slate-900">
            SEO Friendly
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Organize content effectively for
            better discoverability.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <ShieldCheck
            className="mb-4 text-amber-600"
            size={24}
          />

          <h3 className="font-semibold text-slate-900">
            Review Before Publish
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Verify formatting, grammar, and
            structure before going live.
          </p>
        </div>
      </div>

      {/* Productivity Bar */}
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
          <div className="flex items-center gap-3">
            <Clock3
              size={18}
              className="text-indigo-600"
            />

            <span className="text-sm font-medium text-slate-700">
              Draft Workspace Ready
            </span>
          </div>

          <div className="h-4 w-px bg-slate-300" />

          <span className="text-sm text-slate-500">
            Create • Edit • Preview • Publish
          </span>
        </div>
      </div>

      {/* Form Container */}
      <div
        className="
          rounded-4xl
          border
          border-slate-200/70
          bg-white
          p-6
          md:p-8
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Post Information
          </h2>

          <p className="mt-2 text-slate-500">
            Complete the details below to
            create your new blog post.
          </p>
        </div>

        <CreatePostForm />
      </div>
    </div>
  );
}