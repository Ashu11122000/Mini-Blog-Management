"use client";

import { Category } from "../../types/category";

type CategoryListProps = {
    categories: Category[];
};

export default function CategoryList({
    categories,
}: CategoryListProps) {
    if (categories.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-300 bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-slate-800">
                    No Categories Found
                </h3>

                <p className="mt-2 text-slate-500">
                    Create your first category.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-md
                    "
                >
                    <h3 className="text-xl font-bold text-slate-900">
                        {category.name}
                    </h3>

                    <p className="mt-3 text-slate-600">
                        {category.description}
                    </p>

                    <div className="mt-4">
                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                            Category #{category.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}