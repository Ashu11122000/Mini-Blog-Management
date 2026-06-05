"use client";

import {
  AlertOctagon,
  RefreshCw,
  ShieldAlert,
  Activity,
} from "lucide-react";

import Button from "./components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-linear-to-br
          from-slate-50
          via-white
          to-red-50
        "
      >
        <div
          className="
            relative
            flex
            min-h-screen
            items-center
            justify-center
            px-6
          "
        >
          {/* Ambient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                -right-32
                -top-32
                h-125
                w-125
                rounded-full
                bg-red-200/20
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -left-32
                -bottom-32
                h-125
                w-125
                rounded-full
                bg-orange-200/20
                blur-3xl
              "
            />
          </div>

          <div
            className="
              relative
              w-full
              max-w-3xl
              overflow-hidden
              rounded-[36px]
              border
              border-slate-200/70
              bg-white/80
              p-8
              md:p-12
              text-center
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
            "
          >
            {/* Error Icon */}
            <div
              className="
                mx-auto
                flex
                h-28
                w-28
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
              <AlertOctagon size={48} />
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-5xl
              "
            >
              Something Went Wrong
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              An unexpected error occurred while
              loading the application. This issue
              may be temporary and can often be
              resolved by retrying.
            </p>

            {/* Status Cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-red-200
                  bg-red-50
                  p-5
                "
              >
                <ShieldAlert
                  size={22}
                  className="
                    mx-auto
                    mb-3
                    text-red-600
                  "
                />

                <h3
                  className="
                    font-semibold
                    text-slate-900
                  "
                >
                  Error Detected
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Application encountered an
                  unexpected state.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-amber-200
                  bg-amber-50
                  p-5
                "
              >
                <Activity
                  size={22}
                  className="
                    mx-auto
                    mb-3
                    text-amber-600
                  "
                />

                <h3
                  className="
                    font-semibold
                    text-slate-900
                  "
                >
                  Recovery Available
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Most issues can be resolved
                  with a quick refresh.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-emerald-200
                  bg-emerald-50
                  p-5
                "
              >
                <RefreshCw
                  size={22}
                  className="
                    mx-auto
                    mb-3
                    text-emerald-600
                  "
                />

                <h3
                  className="
                    font-semibold
                    text-slate-900
                  "
                >
                  Safe Retry
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Retry the operation without
                  losing application integrity.
                </p>
              </div>
            </div>

            {/* Error Digest */}
            {error?.digest && (
              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-4
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Error Reference
                </p>

                <p
                  className="
                    mt-2
                    font-mono
                    text-sm
                    text-slate-700
                  "
                >
                  {error.digest}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                onClick={() => reset()}
                className="gap-2"
              >
                <RefreshCw size={18} />
                Try Again
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
              If the problem continues, verify
              your application services and
              data sources.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}