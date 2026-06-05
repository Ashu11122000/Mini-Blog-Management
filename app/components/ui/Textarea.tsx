import React from "react";
import { AlertCircle, FileText } from "lucide-react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            tracking-wide
            text-slate-700
          "
        >
          <FileText
            size={14}
            className="text-indigo-500"
          />
          {label}
        </label>
      )}

      <div className="relative">
        <textarea
          className={`
            w-full
            min-h-35
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
            resize-y
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
              top-4
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

      {!error && (
        <p
          className="
            text-xs
            text-slate-500
          "
        >
          Write clear and engaging content for your readers.
        </p>
      )}
    </div>
  );
}