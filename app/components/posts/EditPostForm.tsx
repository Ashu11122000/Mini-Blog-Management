"use client";

import { useRef, useState } from "react";
import { updatePostAction } from "@/app/actions/postActions";

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

    async function handleAction(formData: FormData) {
        const result = await updatePostAction(
            id,
            formData
        );

        if (result.success) {
            alert("✅ Post updated successfully!");
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Edit Post
                    </h1>

                    <p className="mt-2 text-slate-600">
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
                ref={formRef}
                action={handleAction}
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
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
                        type="text"
                        name="title"
                        defaultValue={initialTitle}
                        required
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-800
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
                        type="text"
                        name="category"
                        defaultValue={initialCategory}
                        required
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-800
                            outline-none
                            transition-all
                            duration-300
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-100
                        "
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-emerald-700">
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
                            bg-white
                            px-5
                            py-4
                            text-slate-800
                            outline-none
                            transition-all
                            duration-300
                            focus:border-emerald-500
                            focus:ring-4
                            focus:ring-emerald-100
                        "
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-amber-700">
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
                            bg-white
                            px-5
                            py-4
                            text-slate-800
                            outline-none
                            transition-all
                            duration-300
                            focus:border-amber-500
                            focus:ring-4
                            focus:ring-amber-100
                        "
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-pink-700">
                        Featured Image
                    </label>

                    <input
                        type="text"
                        name="image"
                        placeholder="/images/blog-1.jpg"
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-5
                            py-4
                            text-slate-800
                            outline-none
                            transition-all
                            duration-300
                            focus:border-pink-500
                            focus:ring-4
                            focus:ring-pink-100
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
                            {contentLength} characters
                        </span>
                    </div>

                    <textarea
                        rows={12}
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
                            bg-white
                            px-5
                            py-4
                            text-slate-800
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
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            via-indigo-600
                            to-violet-600
                            px-8
                            py-4
                            font-semibold
                            text-slate-100
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                        "
                    >
                        Save Changes
                    </button>

                    <button
                        type="reset"
                        className="
                            rounded-2xl
                            border
                            border-slate-300
                            px-8
                            py-4
                            font-medium
                            text-slate-700
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