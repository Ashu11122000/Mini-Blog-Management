export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Dashboard Hero Skeleton */}
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/70
          bg-white/80
          p-8
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="absolute -bottom-20 left-0 h-60 w-60 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative space-y-5">
          <div
            className="
              h-12
              w-80
              rounded-2xl
              bg-linear-to-r
              from-slate-200
              via-slate-100
              to-slate-200
              animate-pulse
            "
          />

          <div
            className="
              h-5
              w-lg
              max-w-full
              rounded-xl
              bg-linear-to-r
              from-slate-100
              via-slate-50
              to-slate-100
              animate-pulse
            "
          />

          <div className="flex gap-3 pt-2">
            <div className="h-10 w-32 rounded-full bg-violet-100 animate-pulse" />

            <div className="h-10 w-32 rounded-full bg-cyan-100 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Analytics Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 rounded bg-slate-100 animate-pulse" />

                <div className="h-10 w-20 rounded bg-slate-200 animate-pulse" />
              </div>

              <div className="h-14 w-14 rounded-2xl bg-indigo-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
            "
          >
            {/* Shimmer Overlay */}
            <div
              className="
                absolute
                inset-0
                -translate-x-full
                animate-[shimmer_2s_infinite]
                bg-linear-to-r
                from-transparent
                via-white/50
                to-transparent
              "
            />

            {/* Category */}
            <div className="h-7 w-24 rounded-full bg-violet-100 animate-pulse" />

            {/* Title */}
            <div className="mt-5 space-y-3">
              <div className="h-8 w-4/5 rounded-xl bg-slate-200 animate-pulse" />

              <div className="h-8 w-3/5 rounded-xl bg-slate-100 animate-pulse" />
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100" />

            {/* Paragraph */}
            <div className="space-y-3">
              <div className="h-4 rounded bg-slate-100 animate-pulse" />

              <div className="h-4 rounded bg-slate-100 animate-pulse" />

              <div className="h-4 w-4/5 rounded bg-slate-100 animate-pulse" />

              <div className="h-4 w-3/5 rounded bg-slate-100 animate-pulse" />
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-3 w-24 rounded bg-slate-100 animate-pulse" />

                <div className="h-3 w-16 rounded bg-slate-100 animate-pulse" />
              </div>

              <div className="h-11 w-28 rounded-2xl bg-indigo-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Large Chart Skeleton */}
      <div
        className="
          rounded-4xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <div className="mb-8">
          <div className="h-8 w-56 rounded-xl bg-slate-200 animate-pulse" />

          <div className="mt-3 h-4 w-72 rounded bg-slate-100 animate-pulse" />
        </div>

        <div
          className="
            h-87.5
            rounded-3xl
            bg-linear-to-br
            from-slate-100
            via-slate-50
            to-slate-100
            animate-pulse
          "
        />
      </div>
    </div>
  );
}