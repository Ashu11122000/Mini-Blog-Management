import {
  FileEdit,
  Clock3,
  ShieldCheck,
  Sparkles,
  PenSquare,
  Activity,
} from "lucide-react";

interface EditPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPostPage({
  params,
}: EditPostPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
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

        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            {/* Left Side */}
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
                Content Management Studio
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
                Edit Post
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Refine, update, and optimize
                your existing content while
                maintaining consistency and
                quality across your blog.
              </p>
            </div>

            {/* Status Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-3xl
                  border
                  border-indigo-200
                  bg-white/80
                  px-6
                  py-5
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center gap-3">
                  <FileEdit
                    size={20}
                    className="text-indigo-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Post ID
                    </p>

                    <h3 className="font-bold text-indigo-700">
                      #{id}
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
                  <ShieldCheck
                    size={20}
                    className="text-emerald-600"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Status
                    </p>

                    <h3 className="font-bold text-emerald-700">
                      Ready to Edit
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Insights */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <PenSquare
            size={24}
            className="mb-4 text-violet-600"
          />

          <h3 className="font-semibold text-slate-900">
            Update Content
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Improve readability, accuracy,
            and overall content quality.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <Activity
            size={24}
            className="mb-4 text-cyan-600"
          />

          <h3 className="font-semibold text-slate-900">
            Optimize Performance
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Keep content relevant and
            engaging for readers.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <Clock3
            size={24}
            className="mb-4 text-amber-600"
          />

          <h3 className="font-semibold text-slate-900">
            Save Changes
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Review modifications before
            updating the published version.
          </p>
        </div>
      </div>

      {/* Workflow Banner */}
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
              Editing Workspace Active
            </span>
          </div>

          <div className="h-4 w-px bg-slate-300" />

          <span className="text-sm text-slate-500">
            Review • Modify • Validate • Update
          </span>
        </div>
      </div>

      {/* Editor Container */}
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
        <div className="mb-8 flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-r
              from-violet-500
              to-indigo-600
              text-slate-50
            "
          >
            <FileEdit size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Post Editor
            </h2>

            <p className="mt-1 text-slate-500">
              Modify title, category,
              metadata, and content.
            </p>
          </div>
        </div>

        {/* EditPostForm Goes Here */}
      </div>
    </div>
  );
}