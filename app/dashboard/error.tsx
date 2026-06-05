"use client";

import {
  AlertTriangle,
  RefreshCcw,
  Activity,
} from "lucide-react";

import Button from "../components/ui/Button";

export default function DashboardError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div
        className="
          relative
          w-full
          max-w-3xl
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/70
          bg-white/80
          p-10
          text-center
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(15,23,42,0.08)]
        "
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-amber-50" />

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              bg-linear-to-r
              from-red-500
              to-rose-600
              text-slate-50
              shadow-xl
            "
          >
            <AlertTriangle size={42} />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-8
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            Dashboard Error
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            We encountered an unexpected issue
            while loading dashboard information.
            Please try again to restore the
            latest data.
          </p>

          {/* Status Card */}
          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-md
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-5
              py-4
            "
          >
            <Activity
              size={18}
              className="text-red-600"
            />

            <span className="font-medium text-red-700">
              Dashboard data unavailable
            </span>
          </div>

          {/* Action */}
          <div className="mt-10 flex justify-center">
            <Button
              onClick={reset}
              size="lg"
              className="gap-2"
            >
              <RefreshCcw size={18} />
              Reload Dashboard
            </Button>
          </div>

          {/* Footer */}
          <p
            className="
              mt-6
              text-sm
              text-slate-500
            "
          >
            If the issue persists, verify your
            services and data sources.
          </p>
        </div>
      </div>
    </div>
  );
}