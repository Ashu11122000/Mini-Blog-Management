// components/charts/PostsChart.tsx

import { getRecentPosts } from "../../services/analyticsService";

export default function PostsChart() {
  const posts = getRecentPosts();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Posts
      </h2>

      <div className="space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-b pb-2"
          >
            <p className="font-medium">
              {post.title}
            </p>

            <p className="text-sm text-gray-500">
              {post.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}