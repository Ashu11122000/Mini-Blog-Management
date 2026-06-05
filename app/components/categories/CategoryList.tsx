"use client";

import {
  FolderKanban,
  Hash,
  Sparkles,
  Layers3,
} from "lucide-react";

import { Category } from "../../types/category";

type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList({
  categories,
}: CategoryListProps) {
  if (categories.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-10 shadow-xl text-center">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-sky-50 to-violet-50" />

        <div className="relative">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-100 to-violet-100">
            <FolderKanban
              size={36}
              className="text-indigo-700"
            />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-slate-900">
            No Categories Found
          </h3>

          <p className="mt-3 max-w-md mx-auto text-slate-600 leading-relaxed">
            Start organizing your content by creating
            categories. Categories improve navigation,
            SEO structure, and content discoverability.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            <Sparkles size={16} />
            Create your first category
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header Stats */}
      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-lg">
        <div className="flex items-center gap-3">
          <Layers3
            size={24}
            className="text-indigo-600"
          />

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Category Library
            </h2>

            <p className="text-slate-600">
              Manage and organize your content structure.
            </p>
          </div>
        </div>

        <div className="mt-5 inline-flex rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Total Categories
            </p>

            <p className="text-2xl font-bold text-indigo-900">
              {categories.length}
            </p>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white/90
              backdrop-blur-xl
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/40 via-sky-50/20 to-violet-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100">
                <FolderKanban
                  size={26}
                  className="text-indigo-700"
                />
              </div>

              {/* Category Name */}
              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {category.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 leading-relaxed">
                {category.description}
              </p>

              {/* Metadata */}
              <div className="mt-6 flex flex-wrap gap-3">

                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                  <Hash size={14} />
                  ID #{category.id}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  Active
                </span>

              </div>

              {/* Bottom Insight */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Content Insight
                </p>

                <p className="mt-2 text-sm text-slate-700">
                  This category helps organize related
                  articles and improves user navigation.
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}