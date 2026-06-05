import { notFound } from "next/navigation";
import { CalendarDays, User, Tag } from "lucide-react";

import { getPostById } from "../../services/postService";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { id } = await params;

  const post = await getPostById(
    Number(id)
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50 to-sky-50 px-4 py-12">
      <article className="max-w-5xl mx-auto">

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12">

          <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 via-sky-500/5 to-violet-500/5" />

          <div className="relative">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700 mb-6">
              Featured Article
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-600 border-b border-slate-200 pb-6">

              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{post.createdAt}</span>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={18} />
                <span>
                  {post.tags.length} Tags
                </span>
              </div>

            </div>

            {/* Reading Stats */}
            <div className="mt-6 flex flex-wrap gap-4">

              <div className="rounded-xl bg-sky-50 border border-sky-200 px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">
                  Reading Time
                </p>
                <p className="text-lg font-bold text-sky-900">
                  {Math.max(
                    1,
                    Math.ceil(
                      post.content.split(" ")
                        .length / 200
                    )
                  )}{" "}
                  min
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">
                  Content Length
                </p>
                <p className="text-lg font-bold text-emerald-900">
                  {
                    post.content.split(" ")
                      .length
                  }{" "}
                  words
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200 shadow-lg p-8 md:p-12">

          <div className="prose prose-lg prose-slate max-w-none">

            <p className="text-slate-700 leading-8 text-lg whitespace-pre-line">
              {post.content}
            </p>

          </div>

        </div>

        {/* Tags Section */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200 shadow-lg p-8">

          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Related Topics
          </h3>

          <div className="flex flex-wrap gap-3">

            {post.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  bg-linear-to-r
                  from-indigo-50
                  to-sky-50
                  text-indigo-700
                  border
                  border-indigo-200
                  hover:shadow-md
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                #{tag}
              </span>
            ))}

          </div>
        </div>

        {/* Author Section */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-8 shadow-lg">

          <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">
            Author
          </p>

          <h4 className="mt-2 text-2xl font-bold text-slate-900">
            {post.author}
          </h4>

          <p className="mt-3 text-slate-600 leading-relaxed">
            Thank you for reading this article. Stay tuned for more
            insightful content, tutorials, and industry updates.
          </p>

        </div>

      </article>
    </div>
  );
}