import Link from "next/link";
import { Post } from "../../types/post";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)]
            "
        >
            {/* Decorative Gradient */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

            {/* Category Badge */}
            <div className="mb-4">
                <span
                    className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-gradient-to-r
                        from-violet-100
                        to-indigo-100
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        tracking-wide
                        text-indigo-700
                    "
                >
                    {post.category}
                </span>
            </div>

            {/* Title */}
            <h2
                className="
                    text-2xl
                    font-bold
                    text-slate-800
                    transition-all
                    duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-violet-600
                    group-hover:to-indigo-600
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                "
            >
                {post.title}
            </h2>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent" />

            {/* Content Preview */}
            <p className="leading-7 text-slate-600">
                {post.content.length > 140
                    ? `${post.content.slice(0, 140)}...`
                    : post.content}
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">
                    Blog Post
                </span>

                <Link
                    href={`/blog/${post.id}`}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-600
                        via-indigo-600
                        to-cyan-500
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-xl
                    "
                >
                    Read More

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </div>
        </article>
    );
}