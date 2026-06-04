interface Props {
    title: string;
    value: number;
    change: string;
}

export default function StatsCard({
    title,
    value,
    change,
}: Props) {
    const isPositive = change.startsWith("+");

    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600" />

            {/* Label */}
            <p className="text-sm font-medium text-slate-500">
                {title}
            </p>

            {/* Value */}
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                {value.toLocaleString()}
            </h3>

            {/* Growth */}
            <div className="mt-5 flex items-center justify-between">
                <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        isPositive
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {change}
                </span>

                <span className="text-xs font-medium text-slate-400">
                    vs last month
                </span>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-100 opacity-40 blur-2xl transition-all duration-300 group-hover:opacity-70" />
        </div>
    );
}