"use client";

import { useState } from "react";
import {
  Search,
  FileSearch,
  Sparkles,
  X,
} from "lucide-react";

interface SearchPostsProps {
  onSearch: (query: string) => void;
}

export default function SearchPosts({
  onSearch,
}: SearchPostsProps) {
  const [query, setQuery] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <section className="mb-8 space-y-5">
      {/* Search Header */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200/80
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50
          p-6
          shadow-[0_15px_50px_rgba(15,23,42,0.06)]
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-100/40 blur-3xl" />

          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-4
              py-2
              text-sm
              font-semibold
              text-violet-700
            "
          >
            <Sparkles size={16} />
            Smart Content Discovery
          </div>

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Search Posts
          </h2>

          <p className="mt-1 text-slate-600">
            Instantly find articles, tutorials,
            guides, and published content.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/80
          bg-white/90
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(15,23,42,0.06)]
        "
      >
        <div className="flex items-center px-5">
          {/* Search Icon */}
          <Search
            size={22}
            className="text-indigo-500"
          />

          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by title, category, tags, or content..."
            className="
              h-16
              w-full
              bg-transparent
              px-4
              text-slate-800
              placeholder:text-slate-400
              outline-none
            "
          />

          {query && (
            <button
              onClick={clearSearch}
              className="
                rounded-xl
                p-2
                text-slate-400
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-slate-700
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Bottom Accent */}
        <div
          className="
            h-0.5
            bg-linear-to-r
            from-violet-500
            via-indigo-500
            to-cyan-500
          "
        />
      </div>

      {/* Search Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          <FileSearch size={16} />

          <span className="text-sm">
            {query
              ? `Searching for "${query}"`
              : "Type keywords to filter posts"}
          </span>
        </div>

        {query && (
          <div
            className="
              rounded-full
              border
              border-indigo-200
              bg-indigo-50
              px-3
              py-1
              text-xs
              font-semibold
              text-indigo-700
            "
          >
            Active Filter
          </div>
        )}
      </div>
    </section>
  );
}