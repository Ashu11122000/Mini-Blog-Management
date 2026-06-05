import {
  FolderTree,
  Layers3,
  Sparkles,
} from "lucide-react";

import CategoryList from "../../components/categories/CategoryList";
import { getAllCategories } from "../../services/categoryService";

export default function CategoriesPage() {
  const categories =
    getAllCategories();

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/70
          bg-linear-to-br
          from-white
          via-slate-50
          to-emerald-50/40
          p-8
          shadow-lg
          shadow-slate-200/40
        "
      >
        {/* Decorative Glow */}
        <div
          className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            bg-emerald-100/60
            blur-3xl
          "
        />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-r
                    from-emerald-500
                    to-green-600
                    text-slate-50
                    shadow-lg
                  "
                >
                  <FolderTree size={26} />
                </div>

                <div>
                  <h1
                    className="
                      text-4xl
                      font-bold
                      tracking-tight
                      text-slate-900
                    "
                  >
                    Categories
                  </h1>

                  <p
                    className="
                      mt-2
                      text-slate-600
                    "
                  >
                    Organize, structure,
                    and manage blog content
                    categories efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div
              className="
                rounded-2xl
                border
                border-emerald-200/60
                bg-white/80
                px-6
                py-4
                backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-3">
                <Layers3
                  size={20}
                  className="text-emerald-600"
                />

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Total Categories
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {categories.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Bar */}
      <div
        className="
          grid
          gap-4
          md:grid-cols-3
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <FolderTree
              size={20}
              className="text-emerald-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Categories
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {categories.length}
              </h3>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <Layers3
              size={20}
              className="text-indigo-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Content Structure
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Organized
              </h3>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <Sparkles
              size={20}
              className="text-amber-600"
            />

            <div>
              <p className="text-sm text-slate-500">
                Management Status
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Active
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200/70
          bg-white
          p-6
          shadow-lg
          shadow-slate-200/40
        "
      >
        <div className="mb-6">
          <h2
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            Category Directory
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
            "
          >
            Browse and manage all
            available blog categories.
          </p>
        </div>

        <CategoryList
          categories={categories}
        />
      </div>
    </div>
  );
}