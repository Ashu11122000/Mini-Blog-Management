export default function Loading() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 p-8">
            <div className="animate-pulse space-y-8">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-8 w-64 rounded-lg bg-slate-200" />
                        <div className="mt-3 h-4 w-40 rounded-lg bg-slate-200" />
                    </div>

                    <div className="h-12 w-12 rounded-full bg-slate-200" />
                </div>

                {/* Stats Cards Skeleton */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="h-4 w-24 rounded bg-slate-200" />
                            <div className="mt-4 h-10 w-20 rounded bg-slate-200" />
                            <div className="mt-4 h-5 w-16 rounded bg-slate-200" />
                        </div>
                    ))}
                </div>

                {/* Table Skeleton */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 p-6">
                        <div className="h-6 w-48 rounded bg-slate-200" />
                        <div className="mt-3 h-4 w-64 rounded bg-slate-200" />
                    </div>

                    <div className="p-6 space-y-5">
                        {[1, 2, 3, 4, 5].map((row) => (
                            <div
                                key={row}
                                className="flex items-center justify-between"
                            >
                                <div className="h-5 w-64 rounded bg-slate-200" />
                                <div className="h-5 w-24 rounded bg-slate-200" />
                                <div className="h-5 w-20 rounded bg-slate-200" />
                                <div className="h-5 w-16 rounded bg-slate-200" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Loading Message */}
                <div className="flex justify-center">
                    <div className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-medium text-indigo-700">
                        Loading dashboard data...
                    </div>
                </div>
            </div>
        </div>
    );
}