"use client";

import { useState } from "react";

export default function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = {
            title,
            category,
            content,
        };

        console.log("Creating Post:", newPost);

        alert("🎉 Post created successfully!");

        setTitle("");
        setCategory("");
        setContent("");
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                    Create New Post
                </h1>

                <p className="mt-2 text-slate-500">
                    Share your ideas, knowledge, and stories with your audience.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-6"
            >
                {/* Title */}
                <div>
                    <label className="block mb-2 text-sm font-semibold text-violet-700">
                        Post Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter an engaging title..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
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
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Technology, Design, Business..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        required
                    />
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-semibold text-cyan-700">
                            Content
                        </label>

                        <span className="text-xs text-slate-500">
                            {content.length} characters
                        </span>
                    </div>

                    <textarea
                        rows={10}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content here..."
                        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 outline-none transition-all duration-300 resize-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                        required
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        type="submit"
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                        <span className="relative z-10">
                            Publish Post
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setTitle("");
                            setCategory("");
                            setContent("");
                        }}
                        className="rounded-2xl border border-slate-300 px-8 py-4 font-medium text-slate-600 transition-all duration-300 hover:bg-slate-100"
                    >
                        Clear Form
                    </button>
                </div>
            </form>
        </div>
    );
}