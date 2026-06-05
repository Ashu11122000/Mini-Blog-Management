import React from "react";
import { FileX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-dashed
        border-slate-300/80
        bg-linear-to-br
        from-white
        via-slate-50
        to-indigo-50/40
        px-8
        py-16
        text-center
        shadow-lg
        shadow-slate-200/40
        backdrop-blur-xl
        transition-all
        duration-300
        hover:shadow-xl
        hover:shadow-indigo-100/40
      "
    >
      {/* Decorative Background Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          h-40
          w-40
          rounded-full
          bg-indigo-100/50
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-16
          -left-16
          h-40
          w-40
          rounded-full
          bg-sky-100/40
          blur-3xl
          pointer-events-none
        "
      />

      {/* Icon Container */}
      <div
        className="
          relative
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          border
          border-slate-200
          bg-white/90
          shadow-md
          backdrop-blur-sm
        "
      >
        <FileX
          size={42}
          className="
            text-indigo-500
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          {title}
        </h3>

        {description && (
          <p
            className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-relaxed
              text-slate-600
            "
          >
            {description}
          </p>
        )}
      </div>

      {/* Optional Action */}
      {action && (
        <div className="relative mt-8 flex justify-center">
          {action}
        </div>
      )}

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-full
          bg-linear-to-r
          from-indigo-500
          via-blue-500
          to-violet-500
          opacity-90
        "
      />
    </div>
  );
}