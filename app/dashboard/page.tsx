import DashboardStats from "../components/dashboard/DashboardStats";
import RecentPostsTable from "../components/dashboard/RecentPostsTable";
import { PlusCircle, FileText, BarChart3 } from "lucide-react";

export default function DashboardPage() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 text-white shadow-xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                            🚀 Dashboard Overview
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                            Welcome Back, Ashish 👋
                        </h1>

                        <p className="mt-3 max-w-2xl text-indigo-100">
                            Manage your blog content, monitor analytics,
                            track engagement, and grow your audience from one
                            central dashboard.
                        </p>

                        <p className="mt-4 text-sm text-indigo-200">
                            {today}
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-3">
                        <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-indigo-700 shadow-lg transition hover:scale-105">
                            <PlusCircle size={18} />
                            New Post
                        </button>

                        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                            <FileText size={18} />
                            Manage Posts
                        </button>

                        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                            <BarChart3 size={18} />
                            Analytics
                        </button>
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <DashboardStats />

            {/* Recent Posts */}
            <RecentPostsTable />
        </div>
    );
}