// app/dashboard/analytics/page.tsx

import ViewsChart from "../../components/charts/ViewsChart";
import PostsChart from "../../components/charts/PostsChart";
import CategoryDistributionChart from "../../components/charts/CategoryDistributionChart";
import { getDashboardStats } from "../../services/analyticsService";

export default function AnalyticsPage() {
  const stats = getDashboardStats();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">
            Total Posts
          </h3>
          <p className="text-3xl font-bold">
            {stats.totalPosts}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">
            Categories
          </h3>
          <p className="text-3xl font-bold">
            {stats.totalCategories}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">
            Comments
          </h3>
          <p className="text-3xl font-bold">
            {stats.totalComments}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-500">
            Views
          </h3>
          <p className="text-3xl font-bold">
            {stats.totalViews}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ViewsChart />
        <PostsChart />
      </div>

      <CategoryDistributionChart />
    </div>
  );
}