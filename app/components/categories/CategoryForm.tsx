"use client";

import { useRef } from "react";
import { createCategoryAction } from "@/app/actions/categoryActions";

export default function CategoryForm() {
    const formRef = useRef<HTMLFormElement>(null);

    async function handleAction(formData: FormData) {
        const result = await createCategoryAction(formData);

        if (result.success) {
            alert("✅ Category created successfully!");
            formRef.current?.reset();
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Create Category
                </h2>

                <p className="mt-2 text-slate-600">
                    Organize your blog posts with categories.
                </p>
            </div>

            <form
                ref={formRef}
                action={handleAction}
                className="space-y-6"
            >
                <div>
                    <label className="mb-2 block text-sm font-semibold text-indigo-700">
                        Category Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Technology"
                        required
                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            px-4
                            py-3
                            text-slate-800
                            outline-none
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-100
                        "
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-violet-700">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Brief description of the category..."
                        required
                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            px-4
                            py-3
                            text-slate-800
                            resize-none
                            outline-none
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-100
                        "
                    />
                </div>

                <button
                    type="submit"
                    className="
                        rounded-xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-violet-600
                        px-6
                        py-3
                        font-semibold
                        text-slate-100
                        shadow-lg
                        transition
                        hover:scale-[1.02]
                    "
                >
                    Create Category
                </button>
            </form>
        </div>
    );
}