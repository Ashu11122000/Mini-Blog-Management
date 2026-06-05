import Skeleton from "../components/feedback/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Hero Section Skeleton */}
      <div
        className="
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
        <Skeleton className="h-12 w-80 rounded-2xl" />

        <Skeleton className="mt-4 h-5 w-lg max-w-full rounded-xl" />

        <div className="mt-6 flex gap-3">
          <Skeleton className="h-10 w-36 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
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
                <Skeleton className="h-4 w-24 rounded-lg" />

                <Skeleton className="h-10 w-20 rounded-xl" />
              </div>

              <Skeleton className="h-14 w-14 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Cards Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
            "
          >
            {/* Badge */}
            <Skeleton className="h-7 w-24 rounded-full" />

            {/* Title */}
            <div className="mt-5 space-y-3">
              <Skeleton className="h-7 w-4/5 rounded-xl" />
              <Skeleton className="h-7 w-3/5 rounded-xl" />
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100" />

            {/* Content */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-4/5 rounded-lg" />
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <Skeleton className="h-4 w-20 rounded-lg" />

              <Skeleton className="h-10 w-28 rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
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
        <Skeleton className="mb-6 h-8 w-56 rounded-xl" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                pb-4
              "
            >
              <Skeleton className="h-5 w-48 rounded-lg" />

              <Skeleton className="h-5 w-24 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}