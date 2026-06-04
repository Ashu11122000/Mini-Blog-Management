"use client";

import { useState } from "react";

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
    const [title, setTitle] = useState(initialTitle);
    const [category, setCategory] = useState(initialCategory);
    const [content, setContent] = useState(initialContent);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            id,
            title,
            category,
            content,
        });

        alert("Post updated successfully!");
    };

    const handleReset = () => {
        setTitle(initialTitle);
        setCategory(initialCategory);
        setContent(initialContent);
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Edit Post
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Update and manage your blog content.
                    </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-medium text-blue-700">
                        Post ID: #{id}
                    </span>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/80
                    backdrop-blur-xl
                    p-8
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    space-y-6
                "
            >
                {/* Title */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-blue-700">
                        Post Title
                    </label>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                        "
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-indigo-700">
                        Category
                    </label>

                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Technology, Design, Business..."
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-100
                        "
                    />
                </div>

                {/* Content */}
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-semibold text-violet-700">
                            Content
                        </label>

                        <span className="text-xs font-medium text-slate-500">
                            {content.length} characters
                        </span>
                    </div>

                    <textarea
                        rows={12}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Update your blog content..."
                        className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-100
                        "
                    />
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <button
                        type="submit"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            via-indigo-600
                            to-violet-600
                            px-8
                            py-4
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-xl
                        "
                    >
                        Save Changes
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            rounded-2xl
                            border
                            border-slate-300
                            px-8
                            py-4
                            font-medium
                            text-slate-600
                            transition-all
                            duration-300
                            hover:bg-slate-100
                        "
                    >
                        Reset Changes
                    </button>
                </div>
            </form>
        </div>
    );
}