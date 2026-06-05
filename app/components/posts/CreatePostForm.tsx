"use client";

import { useRef } from "react";
import {
  Sparkles,
  FileText,
  Globe,
  User,
  Tag,
  ImageIcon,
  PenSquare,
} from "lucide-react";

import { createPostAction } from "@/app/actions/postActions";

export default function CreatePostForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await createPostAction(formData);

    if (result.success) {
      console.log("🎉 Post published successfully!");
      formRef.current?.reset();
    } else {
      console.log(result.message);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="relative mb-10 overflow-hidden rounded-4xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-indigo-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={16} />
            Content Publishing Studio
          </div>

          <h1 className="mt-5 bg-linear-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Create New Post
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Craft engaging content, organize your ideas, and publish
            professional blog posts with a premium content management
            experience.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
            Content Type
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-600">
              <FileText size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Blog Post</p>
              <p className="text-sm text-slate-500">
                Long-form article
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            Publishing Status
          </p>

          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
              <PenSquare size={20} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Draft Mode</p>
              <p className="text-sm text-slate-500">
                Ready for editing
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
              <p className="font-bold text-slate-900">Public</p>
              <p className="text-sm text-slate-500">
                Visible to readers
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
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Title */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <FileText
                size={16}
                className="text-violet-600"
              />
              Post Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter an engaging title..."
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
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
                focus:outline-none
              "
              required
            />

            <p className="mt-2 text-xs text-slate-500">
              This title will appear on your blog listing page and
              article header.
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Tag size={16} className="text-indigo-600" />
              Category
            </label>

            <input
              type="text"
              name="category"
              placeholder="Technology, Business, Design..."
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
                focus:border-indigo-500
                focus:ring-4
                focus:ring-indigo-100
                focus:outline-none
              "
              required
            />

            <p className="mt-2 text-xs text-slate-500">
              Helps organize posts and improve content discovery.
            </p>
          </div>

          {/* Author */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <User size={16} className="text-emerald-600" />
              Author
            </label>

            <input
              type="text"
              name="author"
              placeholder="Enter author name..."
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
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
                focus:outline-none
              "
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Tag size={16} className="text-amber-600" />
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
                placeholder:text-slate-400
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
              Separate multiple tags using commas.
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
                placeholder:text-slate-400
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-pink-500
                focus:ring-4
                focus:ring-pink-100
                focus:outline-none
              "
            />

            <p className="mt-2 text-xs text-slate-500">
              Add a cover image to increase engagement.
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <PenSquare
                size={16}
                className="text-cyan-600"
              />
              Content
            </label>

            <textarea
              rows={14}
              name="content"
              placeholder="Write your blog content here..."
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
                placeholder:text-slate-400
                transition-all
                duration-300
                hover:border-slate-400
                focus:border-cyan-500
                focus:ring-4
                focus:ring-cyan-100
                focus:outline-none
              "
              required
            />

            <p className="mt-2 text-xs text-slate-500">
              Supports tutorials, guides, case studies,
              announcements, and long-form content.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">
                Ready to publish?
              </p>

              <p className="text-sm text-slate-500">
                Review your content before making it live.
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
                Clear Form
              </button>

              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-linear-to-r
                  from-violet-600
                  via-indigo-600
                  to-cyan-500
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
                Publish Post →
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}