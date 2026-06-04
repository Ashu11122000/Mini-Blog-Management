"use client";

import { useTransition } from "react";
import { deletePostAction } from "@/app/actions/postActions";

interface DeletePostButtonProps {
    postId: number;
}

export default function DeletePostButton({
    postId,
}: DeletePostButtonProps) {
    const [isPending, startTransition] =
        useTransition();

    const handleDelete = () => {
        const confirmed = window.confirm(
            "⚠️ Are you sure you want to permanently delete this post?\n\nThis action cannot be undone."
        );

        if (!confirmed) return;

        startTransition(async () => {
            const result =
                await deletePostAction(postId);

            if (result.success) {
                alert("🗑️ Post deleted successfully!");
            } else {
                alert(result.message);
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
                gap-2
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-rose-500
                via-red-500
                to-red-600
                px-5
                py-3
                font-semibold
                text-slate-100
                shadow-lg
                shadow-red-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-red-500/40
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-60
            "
        >
            {/* Hover Effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Trash Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7L18.132 19.142A2 2 0 0116.138 21H7.862A2 2 0 015.868 19.142L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h8"
                />
            </svg>

            <span className="relative z-10">
                {isPending
                    ? "Deleting..."
                    : "Delete Post"}
            </span>
        </button>
    );
}