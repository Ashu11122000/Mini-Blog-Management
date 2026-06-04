import PostCard from "./PostCard";
import { Post } from "../../types/post";

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/70 p-16 text-center">
                <div className="mb-4 text-6xl">📝</div>

                <h2 className="text-2xl font-bold text-slate-800">
                    No Posts Found
                </h2>

                <p className="mt-2 max-w-md text-slate-500">
                    There are currently no blog posts available.
                    Create a new post to get started.
                </p>
            </div>
        );
    }

    return (
        <section className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                        Latest Posts
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Discover articles, tutorials, and insights from our blog.
                    </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse"></span>

                    <span className="text-sm font-semibold text-indigo-700">
                        {posts.length} {posts.length === 1 ? "Post" : "Posts"}
                    </span>
                </div>
            </div>

            {/* Posts Grid */}
            <div
                className="
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </section>
    );
}