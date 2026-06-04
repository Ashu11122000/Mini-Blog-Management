import CategoryForm from "@/components/categories/CategoryForm";
import CategoryList from "@/components/categories/CategoryList";

import { getAllCategories } from "@/services/categoryService";

export default function CategoriesPage() {
    const categories = getAllCategories();

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">
                    Categories
                </h1>

                <p className="mt-2 text-slate-600">
                    Manage blog categories and
                    organize content.
                </p>
            </div>

            <CategoryForm />

            <div>
                <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                    All Categories
                </h2>

                <CategoryList
                    categories={categories}
                />
            </div>
        </div>
    );
}