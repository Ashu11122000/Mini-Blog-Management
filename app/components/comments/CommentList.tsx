"use client";

import CommentCard from "./CommentCard";
import { BlogComment } from "../../types/comment";

interface CommentListProps {
    comments: BlogComment[];
}

export default function CommentList({
    comments,
}: CommentListProps) {
    if (!comments.length) {
        return (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <h3 className="text-xl font-semibold text-slate-800">
                    No Comments Found
                </h3>

                <p className="mt-2 text-slate-500">
                    Comments will appear here once users start interacting with your blog posts.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6">
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
}