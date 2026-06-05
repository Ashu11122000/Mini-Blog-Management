import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    font-semibold
    tracking-wide
    transition-all
    duration-300
    ease-out
    focus:outline-none
    focus:ring-4
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    active:scale-[0.98]
    hover:-translate-y-0.5
    select-none
    whitespace-nowrap
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-indigo-600
      via-blue-600
      to-violet-600
      text-slate-50
      shadow-lg
      shadow-indigo-500/25
      hover:shadow-xl
      hover:shadow-indigo-500/40
      focus:ring-indigo-200
    `,

    secondary: `
      bg-gradient-to-r
      from-slate-700
      to-slate-800
      text-slate-100
      shadow-lg
      shadow-slate-400/20
      hover:shadow-xl
      hover:shadow-slate-500/30
      focus:ring-slate-200
    `,

    danger: `
      bg-gradient-to-r
      from-rose-600
      to-red-600
      text-slate-50
      shadow-lg
      shadow-rose-500/25
      hover:shadow-xl
      hover:shadow-rose-500/40
      focus:ring-rose-200
    `,

    outline: `
      border
      border-slate-300
      bg-white/90
      backdrop-blur-sm
      text-slate-700
      shadow-sm
      hover:bg-slate-50
      hover:border-indigo-300
      hover:text-indigo-700
      hover:shadow-md
      focus:ring-slate-200
    `,
  };

  const sizes = {
    sm: `
      px-4
      py-2
      text-xs
      min-h-[36px]
    `,

    md: `
      px-5
      py-2.5
      text-sm
      min-h-[42px]
    `,

    lg: `
      px-7
      py-3.5
      text-base
      min-h-[50px]
    `,
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}