import StatsCard from "./StatsCard";
import { dashboardStats } from "../../data/dashboard";

export default function DashboardStats() {
    return (
        <section className="space-y-6">
            {/* Section Header */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Analytics Overview
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Track your blog performance and engagement metrics.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {dashboardStats.map((stat) => (
                    <StatsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                    />
                ))}
            </div>
        </section>
    );
}