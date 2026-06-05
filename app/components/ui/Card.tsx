import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-linear-to-br
        from-white
        via-slate-50/80
        to-indigo-50/30
        backdrop-blur-xl
        shadow-lg
        shadow-slate-200/40
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        hover:shadow-indigo-100/50
        ${className}
      `}
    >
      {/* Premium Accent Glow */}
      <div
        className="
          absolute
          top-0
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

      {/* Decorative Background Orb */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-indigo-100/40
          blur-3xl
          pointer-events-none
        "
      />

      {(title || description) && (
        <div className="relative mb-5">
          {title && (
            <h3
              className="
                text-xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              {title}
            </h3>
          )}

          {description && (
            <p
              className="
                mt-2
                max-w-3xl
                text-sm
                leading-relaxed
                text-slate-600
              "
            >
              {description}
            </p>
          )}
        </div>
      )}

      <div className="relative">
        {children}
      </div>
    </div>
  );
}