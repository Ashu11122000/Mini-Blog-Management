// components/dashboard/QuickActions.tsx

import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-xl font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/dashboard/posts/create"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Post
        </Link>

        <Link
          href="/dashboard/categories"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Categories
        </Link>

        <Link
          href="/dashboard/analytics"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Analytics
        </Link>
      </div>
    </div>
  );
}