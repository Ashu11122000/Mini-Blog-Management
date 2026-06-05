import React from "react";
import {
  AlertCircle,
  ChevronDown,
} from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

export default function Select({
  label,
  error,
  options,
  className = "",
  ...props
}: SelectProps) {
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
        <select
          className={`
            w-full
            appearance-none
            rounded-2xl
            border
            bg-white/90
            px-4
            py-3
            pr-12
            text-sm
            font-medium
            text-slate-800
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

            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-400

            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-500
          "
        />

        {/* Error Icon */}
        {error && (
          <AlertCircle
            size={18}
            className="
              absolute
              right-10
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