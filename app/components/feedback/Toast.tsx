"use client";

import { X, CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({
  message,
  onClose,
}: ToastProps) {
  return (
    <div
      className="
        group
        relative
        flex
        items-center
        justify-between
        gap-4
        overflow-hidden
        rounded-2xl
        border
        border-emerald-200/60
        bg-white/90
        backdrop-blur-xl
        px-5
        py-4
        shadow-[0_10px_40px_rgba(16,185,129,0.15)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_14px_50px_rgba(16,185,129,0.20)]
      "
    >
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-500 via-green-500 to-teal-500" />

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-linear-to-br
            from-emerald-100
            to-green-100
            text-emerald-600
            shadow-sm
          "
        >
          <CheckCircle2 size={22} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            Success
          </p>

          <p className="text-sm text-slate-600">
            {message}
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label="Close notification"
        className="
          rounded-xl
          p-2
          text-slate-500
          transition-all
          duration-200
          hover:bg-slate-100
          hover:text-slate-700
        "
      >
        <X size={18} />
      </button>
    </div>
  );
}