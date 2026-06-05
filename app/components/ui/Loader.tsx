import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({
  size = "md",
  text,
  fullScreen = false,
}: LoaderProps) {
  const sizes = {
    sm: {
      spinner: "h-8 w-8",
      ring: "border-2",
      dot: "h-2 w-2",
    },
    md: {
      spinner: "h-12 w-12",
      ring: "border-[3px]",
      dot: "h-2.5 w-2.5",
    },
    lg: {
      spinner: "h-16 w-16",
      ring: "border-4",
      dot: "h-3 w-3",
    },
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-5">
      {/* Premium Spinner */}
      <div className="relative">
        {/* Glow */}
        <div
          className={`
            absolute
            inset-0
            rounded-full
            bg-indigo-400/20
            blur-xl
            scale-150
          `}
        />

        {/* Outer Ring */}
        <div
          className={`
            ${sizes[size].spinner}
            ${sizes[size].ring}
            animate-spin
            rounded-full
            border-indigo-500/20
            border-t-indigo-600
            border-r-violet-500
          `}
        />

        {/* Inner Ring */}
        <div
          className={`
            absolute
            inset-2
            animate-spin
            rounded-full
            border
            border-sky-200
            border-b-transparent
            [animation-duration:1.5s]
          `}
        />

        {/* Center Dot */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <div
            className={`
              ${sizes[size].dot}
              rounded-full
              bg-linear-to-r
              from-indigo-600
              to-violet-600
              shadow-lg
              shadow-indigo-500/40
            `}
          />
        </div>
      </div>

      {/* Text */}
      {text && (
        <div className="text-center">
          <p
            className="
              text-sm
              font-medium
              tracking-wide
              text-slate-700
            "
          >
            {text}
          </p>

          <p
            className="
              mt-1
              text-xs
              text-slate-500
            "
          >
            Please wait while we prepare your content
          </p>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-white/80
          backdrop-blur-md
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-slate-200/70
            bg-white/90
            px-10
            py-8
            shadow-2xl
            shadow-slate-300/20
            backdrop-blur-xl
          "
        >
          {content}
        </div>
      </div>
    );
  }

  return content;
}