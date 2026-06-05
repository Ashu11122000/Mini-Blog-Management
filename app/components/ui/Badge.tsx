import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "secondary";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: `
      bg-gradient-to-r
      from-indigo-50
      to-blue-50
      text-indigo-700
      border border-indigo-200/70
      shadow-indigo-100
    `,
    success: `
      bg-gradient-to-r
      from-emerald-50
      to-green-50
      text-emerald-700
      border border-emerald-200/70
      shadow-emerald-100
    `,
    warning: `
      bg-gradient-to-r
      from-amber-50
      to-yellow-50
      text-amber-700
      border border-amber-200/70
      shadow-amber-100
    `,
    danger: `
      bg-gradient-to-r
      from-rose-50
      to-red-50
      text-rose-700
      border border-rose-200/70
      shadow-rose-100
    `,
    secondary: `
      bg-gradient-to-r
      from-slate-50
      to-gray-50
      text-slate-700
      border border-slate-200/80
      shadow-slate-100
    `,
  };

  const dots = {
    primary: "bg-indigo-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    secondary: "bg-slate-500",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3.5
        py-1.5
        text-xs
        font-semibold
        tracking-wide
        backdrop-blur-sm
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-md
        ${variants[variant]}
        ${className}
      `}
    >
      <span
        className={`
          h-2
          w-2
          rounded-full
          shadow-sm
          ${dots[variant]}
        `}
      />

      <span>{children}</span>
    </span>
  );
}