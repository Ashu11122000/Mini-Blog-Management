// components/charts/ViewsChart.tsx

import { getMostViewedPosts } from "../../services/analyticsService";

export default function ViewsChart() {
  const posts = getMostViewedPosts();

  const maxViews = Math.max(
    ...posts.map((post) => post.views),
    1
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Most Viewed Posts
      </h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="flex justify-between text-sm mb-1">
              <span>{post.title}</span>
              <span>{post.views}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{
                  width: `${(post.views / maxViews) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}