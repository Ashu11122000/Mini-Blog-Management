export default function Loading() {
    return (
        <div className="space-y-8">
            {/* Header Skeleton */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="h-10 w-72 animate-pulse rounded-xl bg-slate-200" />

                <div className="mt-4 h-5 w-96 animate-pulse rounded-lg bg-slate-100" />
            </div>

            {/* Post Cards Skeleton */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >
                        {/* Category Badge */}
                        <div className="h-7 w-24 animate-pulse rounded-full bg-violet-100" />

                        {/* Title */}
                        <div className="mt-5 h-8 w-4/5 animate-pulse rounded-lg bg-slate-200" />

                        {/* Divider */}
                        <div className="my-5 h-px bg-slate-100" />

                        {/* Content Lines */}
                        <div className="space-y-3">
                            <div className="h-4 animate-pulse rounded bg-slate-100" />

                            <div className="h-4 animate-pulse rounded bg-slate-100" />

                            <div className="h-4 w-4/5 animate-pulse rounded bg-slate-100" />
                        </div>

                        {/* Footer */}
                        <div className="mt-8 flex items-center justify-between">
                            <div className="h-4 w-20 animate-pulse rounded bg-slate-100" />

                            <div className="h-10 w-28 animate-pulse rounded-xl bg-indigo-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}