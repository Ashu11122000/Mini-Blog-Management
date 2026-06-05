import CategoryList from "../../components/categories/CategoryList";
import { getAllCategories } from "../../services/categoryService";

export default function CategoriesPage() {
    const categories = getAllCategories();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">
                    Categories
                </h1>

                <p className="mt-2 text-slate-500">
                    Manage blog categories.
                </p>
            </div>

            <CategoryList categories={categories} />
        </div>
    );
}