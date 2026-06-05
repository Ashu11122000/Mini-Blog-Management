// components/dashboard/NotificationBell.tsx

import { Bell, Sparkles } from "lucide-react";

export default function NotificationBell() {
  const notifications = 3;

  return (
    <button
      className="
        group
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-xl
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-indigo-300
        hover:shadow-lg
      "
      aria-label="Notifications"
    >
      {/* Icon */}
      <Bell
        size={20}
        className="
          text-slate-700
          transition-colors
          duration-300
          group-hover:text-indigo-700
        "
      />

      {/* Badge */}
      <span
        className="
          absolute
          -top-1
          -right-1
          flex
          h-5
          min-w-5
          items-center
          justify-center
          rounded-full
          bg-linear-to-r
          from-rose-500
          to-red-500
          px-1
          text-[10px]
          font-bold
          text-white
          ring-2
          ring-white
          shadow-md
        "
      >
        {notifications}
      </span>

      {/* Activity Indicator */}
      <span
        className="
          absolute
          bottom-1
          right-1
          h-2
          w-2
          rounded-full
          bg-emerald-500
          ring-2
          ring-white
        "
      />

      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-linear-to-br
          from-indigo-500/0
          via-violet-500/0
          to-sky-500/0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Optional Premium Indicator */}
      <Sparkles
        size={10}
        className="
          absolute
          top-1
          left-1
          text-indigo-400
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </button>
  );
}