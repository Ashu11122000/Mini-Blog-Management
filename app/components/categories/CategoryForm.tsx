"use client";

import { useRef } from "react";
import {
  FolderPlus,
  Sparkles,
  Tag,
  FileText,
} from "lucide-react";

import { createCategoryAction } from "@/app/actions/categoryActions";

export default function CategoryForm() {
  const formRef =
    useRef<HTMLFormElement>(null);

  async function handleAction(
    formData: FormData
  ) {
    const result =
      await createCategoryAction(
        formData
      );

    if (result.success) {
      alert(
        "✅ Category created successfully!"
      );

      formRef.current?.reset();
    } else {
      alert(result.message);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl">

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-sky-50 to-violet-50 opacity-80" />

      <div className="relative p-8 md:p-10">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              <Sparkles size={16} />
              Content Organization
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
              Create New Category
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
              Organize your articles into meaningful
              categories to improve navigation,
              content discovery, SEO structure,
              and reader experience.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 lg:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              Best Practice
            </p>

            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Use broad topic names such as
              Technology, Business, Design,
              Development, Marketing, or AI.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          action={handleAction}
          className="mt-10 space-y-8"
        >
          {/* Category Name */}
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-indigo-700">
              <Tag size={16} />
              Category Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Technology"
              required
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-4
                text-slate-800
                placeholder:text-slate-400
                shadow-sm
                outline-none
                transition-all
                duration-300
                focus:border-indigo-500
                focus:ring-4
                focus:ring-indigo-100
                focus:shadow-lg
              "
            />

            <p className="mt-2 text-sm text-slate-500">
              Keep category names short,
              memorable, and descriptive.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-violet-700">
              <FileText size={16} />
              Category Description
            </label>

            <textarea
              rows={5}
              name="description"
              placeholder="Describe what type of content belongs in this category..."
              required
              className="
                w-full
                resize-none
                rounded-2xl
                border
                border-slate-300
                bg-white/90
                px-5
                py-4
                text-slate-800
                placeholder:text-slate-400
                shadow-sm
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
                focus:shadow-lg
              "
            />

            <p className="mt-2 text-sm text-slate-500">
              A clear description helps editors
              understand the purpose of this
              category.
            </p>
          </div>

          {/* Analytics Cards */}
          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Organization
              </p>

              <p className="mt-2 text-sm text-slate-700">
                Group related content together.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                SEO Benefits
              </p>

              <p className="mt-2 text-sm text-slate-700">
                Improve content structure and discoverability.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                User Experience
              </p>

              <p className="mt-2 text-sm text-slate-700">
                Help readers find relevant content faster.
              </p>
            </div>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-linear-to-r
              from-indigo-600
              via-violet-600
              to-sky-600
              px-8
              py-4
              font-semibold
              text-slate-50
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              active:scale-95
            "
          >
            <FolderPlus size={18} />
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
}