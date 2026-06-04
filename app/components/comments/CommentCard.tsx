"use client";

import { BlogComment } from "../../types/comment";

interface CommentCardProps {
    comment: BlogComment;
}

export default function CommentCard({
    comment,
}: CommentCardProps) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        {comment.author}
                    </h3>

                    <p className="text-sm text-slate-500">
                        {comment.createdAt}
                    </p>
                </div>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    Post #{comment.postId}
                </span>
            </div>

            <p className="mt-4 text-slate-700">
                {comment.content}
            </p>
        </div>
    );
}