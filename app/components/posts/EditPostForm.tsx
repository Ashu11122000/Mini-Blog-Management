"use client";

import { useRef, useState } from "react";
import {
  FileEdit,
  FileText,
  Tag,
  User,
  ImageIcon,
  PenSquare,
  Globe,
  Activity,
} from "lucide-react";

import { updatePostAction } from "@/app/actions/postActions";
import { useToast } from "../feedback/ToastProvider";

interface EditPostFormProps {
  id: number;
  initialTitle: string;
  initialCategory: string;
  initialContent: string;
}

export default function EditPostForm({
  id,
  initialTitle,
  initialCategory,
  initialContent,
}: EditPostFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [contentLength, setContentLength] =
    useState(initialContent.length);

  const { showToast } = useToast();

  async function handleAction(formData: FormData) {
    const result = await updatePostAction(
      id,
      formData
    );

    if (result.success) {
      showToast(
        "✅ Post updated successfully!"
      );
    } else {
      showToast(result.message);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero Header */}
      <div className="relative mb-10 overflow-hidden rounded-4xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-indigo-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <FileEdit size={16} />
            Content Editor Workspace
          </div>

          <h1 className="mt-5 bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Edit Post
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Refine your content, update information,
            and keep your audience engaged with
            high-quality articles.
          </p>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Post Reference
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <FileText size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">
                #{id}
              </p>

              <p className="text-sm text-slate-500">
                Active Record
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Editing Status
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
              <Activity size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">
                In Progress
              </p>

              <p className="text-sm text-slate-500">
                Unsaved Changes
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Visibility
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
              <Globe size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">
                Public
              </p>

              <p className="text-sm text-slate-500">
                Visible to Readers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        action={handleAction}
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/80
          bg-white/90
          p-8
          backdrop-blur-xl
          shadow-[0_30px_80px_rgba(15,23,42,0.08)]
        "
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">

                      {/* Title */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <FileText
                size={16}
                className="text-blue-600"
              />
              Post Title
            </label>

            <input
              type="text"
              name="title"
              defaultValue={initialTitle}
              required
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                placeholder:text-slate-400
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                focus:outline-none
              "
            />

            <p className="mt-2 text-xs text-slate-500">
              Update the article headline displayed
              to readers.
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Tag
                size={16}
                className="text-indigo-600"
              />
              Category
            </label>

            <input
              type="text"
              name="category"
              defaultValue={initialCategory}
              required
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-indigo-500
                focus:ring-4
                focus:ring-indigo-100
                focus:outline-none
              "
            />
          </div>

          {/* Author */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <User
                size={16}
                className="text-emerald-600"
              />
              Author
            </label>

            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
                focus:outline-none
              "
            />
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Tag
                size={16}
                className="text-amber-600"
              />
              Tags
            </label>

            <input
              type="text"
              name="tags"
              placeholder="nextjs, react, typescript"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-amber-500
                focus:ring-4
                focus:ring-amber-100
                focus:outline-none
              "
            />

            <p className="mt-2 text-xs text-slate-500">
              Separate multiple tags with commas.
            </p>
          </div>

          {/* Featured Image */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <ImageIcon
                size={16}
                className="text-pink-600"
              />
              Featured Image
            </label>

            <input
              type="text"
              name="image"
              placeholder="/images/blog-cover.jpg"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-pink-500
                focus:ring-4
                focus:ring-pink-100
                focus:outline-none
              "
            />
          </div>

                    {/* Content */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <PenSquare
                  size={16}
                  className="text-violet-600"
                />
                Content Editor
              </label>

              <div className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1">
                <span className="text-xs font-semibold text-violet-700">
                  {contentLength} Characters
                </span>
              </div>
            </div>

            <textarea
              rows={14}
              name="content"
              defaultValue={initialContent}
              required
              onChange={(e) =>
                setContentLength(
                  e.target.value.length
                )
              }
              className="
                w-full
                resize-none
                rounded-2xl
                border
                border-slate-300
                bg-white/80
                px-5
                py-4
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
                focus:outline-none
              "
            />

            <p className="mt-2 text-xs text-slate-500">
              Edit tutorials, announcements,
              case studies, and long-form content.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">
                Ready to update?
              </p>

              <p className="text-sm text-slate-500">
                Changes become visible after saving.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="reset"
                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-6
                  py-3.5
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-slate-100
                "
              >
                Reset Changes
              </button>

              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-linear-to-r
                  from-blue-600
                  via-indigo-600
                  to-violet-600
                  px-8
                  py-3.5
                  font-semibold
                  text-slate-50
                  shadow-lg
                  shadow-indigo-500/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-indigo-500/30
                "
              >
                Save Changes →
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}