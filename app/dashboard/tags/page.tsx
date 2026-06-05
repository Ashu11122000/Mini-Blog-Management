// app/dashboard/tags/page.tsx

import {
  Hash,
  Tags,
  Sparkles,
  TrendingUp,
  Layers3,
  Search,
} from "lucide-react";

const tags = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Web Development",
];

export default function TagsPage() {
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
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-violet-50" />

        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div
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
                  text-sm
                  font-semibold
                  text-indigo-700
                "
              >
                <Sparkles size={16} />
                Content Taxonomy Center
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  tracking-tight
                  bg-linear-to-r
                  from-indigo-600
                  via-violet-600
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Tags Management
              </h1>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Organize content efficiently using
                tags to improve discoverability,
                filtering, and content structure.
              </p>
            </div>

            {/* Stats */}
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
                <Tags
                  size={20}
                  className="text-indigo-600"
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Total Tags
                  </p>

                  <h3 className="text-3xl font-bold text-indigo-700">
                    {tags.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <Hash
            size={24}
            className="mb-4 text-indigo-600"
          />

          <h3 className="font-bold text-slate-900">
            Content Labels
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Improve navigation and content
            organization using tags.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <Search
            size={24}
            className="mb-4 text-cyan-600"
          />

          <h3 className="font-bold text-slate-900">
            Discoverability
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Help readers find related content
            more effectively.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
          <TrendingUp
            size={24}
            className="mb-4 text-emerald-600"
          />

          <h3 className="font-bold text-slate-900">
            SEO Benefits
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Structured tagging improves
            indexing and relevance.
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
            Taxonomy Workspace Active
          </span>

          <div className="h-4 w-px bg-slate-300" />

          <span className="text-sm text-slate-500">
            Organize • Categorize • Discover • Scale
          </span>
        </div>
      </div>

      {/* Tags Library */}
      <div
        className="
          rounded-4xl
          border
          border-slate-200/70
          bg-white
          p-8
          shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        "
      >
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Layers3
              size={24}
              className="text-indigo-600"
            />

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Tag Library
              </h2>

              <p className="mt-1 text-slate-500">
                Browse and manage all available
                content tags.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <div
              key={tag}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-200
                bg-linear-to-r
                from-indigo-50
                to-violet-50
                px-5
                py-3
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-300
                hover:shadow-md
              "
            >
              <Hash
                size={14}
                className="
                  text-indigo-600
                  group-hover:scale-110
                  transition-transform
                "
              />

              <span
                className="
                  font-semibold
                  text-indigo-700
                "
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            mt-8
            border-t
            border-slate-100
            pt-6
          "
        >
          <p className="text-sm text-slate-500">
            Total active tags:{" "}
            <span className="font-semibold text-slate-700">
              {tags.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}