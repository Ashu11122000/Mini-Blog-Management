"use client";

import { useTransition } from "react";
import {
  Trash2,
  Loader2,
  ShieldAlert,
} from "lucide-react";

import { deletePostAction } from "@/app/actions/postActions";

interface DeletePostButtonProps {
  postId: number;
}

export default function DeletePostButton({
  postId,
}: DeletePostButtonProps) {
  const [isPending, startTransition] =
    useTransition();

  const { showToast } = useToast();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "⚠️ Are you sure you want to permanently delete this post?\n\nThis action cannot be undone."
    );

    if (!confirmed) return;

    startTransition(async () => {
      const result =
        await deletePostAction(postId);

      if (result.success) {
        showToast(
          "🗑️ Post deleted successfully."
        );
      } else {
        showToast(result.message);
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="
        group
        relative
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-2xl
        border
        border-red-300/50
        bg-linear-to-r
        from-rose-500
        via-red-500
        to-red-600
        px-6
        py-3.5
        font-semibold
        text-slate-100
        shadow-lg
        shadow-red-500/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-red-500/30
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-white/0
          via-white/10
          to-white/0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Animated Background */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)]
          translate-x-[-150%]
          group-hover:translate-x-[150%]
          transition-transform
          duration-1000
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-white/15
          backdrop-blur-sm
        "
      >
        {isPending ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          <Trash2 size={18} />
        )}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-start">
        <span className="text-sm font-semibold">
          {isPending
            ? "Deleting Post..."
            : "Delete Post"}
        </span>

        {!isPending && (
          <span className="text-xs text-red-100/90">
            Permanent action
          </span>
        )}
      </div>

      {/* Danger Badge */}
      {!isPending && (
        <div
          className="
            relative
            z-10
            ml-2
            hidden
            items-center
            gap-1
            rounded-full
            border
            border-red-200/30
            bg-white/10
            px-2.5
            py-1
            text-[11px]
            font-medium
            text-red-50
            md:flex
          "
        >
          <ShieldAlert size={12} />
          Danger
        </div>
      )}
    </button>
  );
}

function useToast(): { showToast: (message: string) => void } {
  const showToast = (message: string) => {
    console.log(message);
  };

  return { showToast };
}
