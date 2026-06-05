export default function Loading() {
    return (
        <div className="space-y-8">
            {/* Hero Skeleton */}
            <section
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-slate-200/70
                    bg-linear-to-br
                    from-indigo-100
                    via-violet-50
                    to-purple-100
                    p-8
                    md:p-10
                    shadow-[0_20px_60px_rgba(99,102,241,0.12)]
                "
            >
                <div className="animate-pulse">
                    <div className="h-8 w-40 rounded-full bg-white/70" />

                    <div className="mt-6 h-14 w-105 max-w-full rounded-2xl bg-white/80" />

                    <div className="mt-4 h-5 w-150 max-w-full rounded-xl bg-white/70" />

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="h-12 w-40 rounded-2xl bg-white/80" />
                        <div className="h-12 w-40 rounded-2xl bg-white/60" />
                        <div className="h-12 w-40 rounded-2xl bg-white/60" />
                    </div>
                </div>
            </section>

            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="
                            rounded-[28px]
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >
                        <div className="animate-pulse">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="h-4 w-24 rounded-lg bg-slate-200" />

                                    <div className="mt-4 h-10 w-20 rounded-xl bg-slate-300" />

                                    <div className="mt-4 h-4 w-16 rounded-lg bg-slate-200" />
                                </div>

                                <div className="h-14 w-14 rounded-2xl bg-indigo-100" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid gap-5 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="
                            rounded-[28px]
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >
                        <div className="animate-pulse">
                            <div className="h-12 w-12 rounded-2xl bg-slate-200" />

                            <div className="mt-5 h-5 w-36 rounded-lg bg-slate-200" />

                            <div className="mt-3 h-4 w-full rounded-lg bg-slate-100" />

                            <div className="mt-2 h-4 w-4/5 rounded-lg bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="grid gap-6 xl:grid-cols-3">
                {/* Table */}
                <div
                    className="
                        xl:col-span-2
                        overflow-hidden
                        rounded-4xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                    "
                >
                    <div className="border-b border-slate-200 p-6">
                        <div className="animate-pulse">
                            <div className="h-7 w-52 rounded-xl bg-slate-200" />

                            <div className="mt-3 h-4 w-72 rounded-lg bg-slate-100" />
                        </div>
                    </div>

                    <div className="space-y-5 p-6">
                        {[1, 2, 3, 4, 5].map((row) => (
                            <div
                                key={row}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-slate-100
                                    pb-4
                                "
                            >
                                <div className="h-5 w-64 rounded bg-slate-200" />

                                <div className="h-5 w-24 rounded bg-slate-200" />

                                <div className="h-5 w-20 rounded bg-slate-200" />

                                <div className="h-5 w-16 rounded bg-slate-200" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Card */}
                <div
                    className="
                        rounded-4xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                    "
                >
                    <div className="animate-pulse">
                        <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />

                        <div className="mt-6 h-6 w-40 mx-auto rounded-lg bg-slate-200" />

                        <div className="mt-3 h-4 w-56 mx-auto rounded-lg bg-slate-100" />

                        <div className="mt-8 space-y-3">
                            <div className="h-4 rounded-lg bg-slate-100" />
                            <div className="h-4 rounded-lg bg-slate-100" />
                            <div className="h-4 w-4/5 rounded-lg bg-slate-100" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div
                className="
                    rounded-4xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                "
            >
                <div className="animate-pulse">
                    <div className="h-7 w-64 rounded-xl bg-slate-200" />

                    <div className="mt-3 h-4 w-72 rounded-lg bg-slate-100" />

                    <div className="mt-8 h-80 rounded-3xl bg-linear-to-br from-slate-100 via-slate-50 to-slate-100" />
                </div>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center">
                <div
                    className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-indigo-200
                        bg-indigo-50
                        px-5
                        py-3
                    "
                >
                    <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />

                    <span className="text-sm font-medium text-indigo-700">
                        Loading dashboard workspace...
                    </span>
                </div>
            </div>
        </div>
    );
}