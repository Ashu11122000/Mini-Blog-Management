import React from "react";
import { AlertCircle } from "lucide-react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          className="
            block
            text-sm
            font-semibold
            tracking-wide
            text-slate-700
          "
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          className={`
            w-full
            rounded-2xl
            border
            bg-white/90
            px-4
            py-3
            text-sm
            font-medium
            text-slate-800
            placeholder:text-slate-400
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300

            focus:outline-none
            focus:ring-4

            ${
              error
                ? `
                  border-rose-300
                  focus:border-rose-500
                  focus:ring-rose-100
                `
                : `
                  border-slate-300
                  hover:border-indigo-300
                  focus:border-indigo-500
                  focus:ring-indigo-100
                `
            }

            ${className}
          `}
          {...props}
        />

        {error && (
          <AlertCircle
            size={18}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-rose-500
            "
          />
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2">
          <AlertCircle
            size={14}
            className="text-rose-500"
          />

          <p
            className="
              text-sm
              font-medium
              text-rose-600
            "
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
}