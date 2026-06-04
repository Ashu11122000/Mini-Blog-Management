"use client";

import { useState } from "react";

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

    return (
        <div className="mb-6">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search posts..."
                className="w-full border rounded-lg px-4 py-3"
            />
        </div>
    );
}