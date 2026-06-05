interface SkeletonProps {
  className?: string;
}

export default function Skeleton({
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/70
        bg-linear-to-r
        from-slate-100
        via-slate-50
        to-slate-100
        shadow-sm
        ${className}
      `}
    >
      {/* Shimmer Effect */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[shimmer_2s_infinite]
          bg-linear-to-r
          from-transparent
          via-white/70
          to-transparent
        "
      />
    </div>
  );
}