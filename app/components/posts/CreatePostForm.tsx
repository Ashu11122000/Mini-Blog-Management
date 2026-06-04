"use client";

import { useRef } from "react";
import { createPostAction } from "@/app/actions/postActions";

export default function CreatePostForm() {
    const formRef = useRef<HTMLFormElement>(null);

    async function handleAction(formData: FormData) {
        const result = await createPostAction(formData);

        if (result.success) {
            alert("🎉 Post created successfully!");
            formRef.current?.reset();
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                    Create New Post
                </h1>

                <p className="mt-2 text-slate-600">
                    Share your ideas, knowledge, and stories with your audience.
                </p>
            </div>

            <form
                ref={formRef}
                action={handleAction}
                className="backdrop-blur-xl bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-6"
            >
                {/* Title */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-violet-700">
                        Post Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter an engaging title..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-indigo-700">
                        Category
                    </label>

                    <input
                        type="text"
                        name="category"
                        placeholder="Technology, Design, Business..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        required
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-emerald-700">
                        Author
                    </label>

                    <input
                        type="text"
                        name="author"
                        placeholder="Enter author name..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                        required
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-amber-700">
                        Tags
                    </label>

                    <input
                        type="text"
                        name="tags"
                        placeholder="nextjs, react, typescript"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-pink-700">
                        Featured Image
                    </label>

                    <input
                        type="text"
                        name="image"
                        placeholder="/images/blog-1.jpg"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-cyan-700">
                        Content
                    </label>

                    <textarea
                        rows={10}
                        name="content"
                        placeholder="Write your blog content here..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 resize-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        type="submit"
                        className="rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                        Publish Post
                    </button>

                    <button
                        type="reset"
                        className="rounded-2xl border border-slate-300 px-8 py-4 font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100"
                    >
                        Clear Form
                    </button>
                </div>
            </form>
        </div>
    );
}