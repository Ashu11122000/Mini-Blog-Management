// components/charts/CategoryDistributionChart.tsx

import { getPostsPerCategory } from "../../services/analyticsService";

export default function CategoryDistributionChart() {
  const data = getPostsPerCategory();

  const maxCount = Math.max(...data.map((item) => item.count), 1);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Posts by Category
      </h2>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.category}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.category}</span>
              <span>{item.count}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{
                  width: `${(item.count / maxCount) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}