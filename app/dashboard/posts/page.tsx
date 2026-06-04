import PostList from "../../components/posts/PostList";
import { getPosts } from "../../services/postService";

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-cyan-50 opacity-90" />

                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            All Posts
                        </h1>

                        <p className="mt-4 max-w-2xl text-lg text-slate-500">
                            Manage, explore, and organize all published blog
                            content from your dashboard.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4">
                        <div className="rounded-2xl border border-violet-200 bg-violet-50 px-6 py-4">
                            <p className="text-xs uppercase tracking-wider text-violet-500">
                                Total Posts
                            </p>

                            <p className="mt-1 text-3xl font-bold text-violet-700">
                                {posts.length}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4">
                            <p className="text-xs uppercase tracking-wider text-emerald-500">
                                Status
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

                                <span className="font-semibold text-emerald-700">
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Overview */}
            <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 text-3xl">📝</div>

                    <h3 className="font-bold text-slate-800">
                        Content Management
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Create, edit, and organize blog content effortlessly.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 text-3xl">🚀</div>

                    <h3 className="font-bold text-slate-800">
                        Fast Publishing
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Publish and manage articles through a modern dashboard.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 text-3xl">📊</div>

                    <h3 className="font-bold text-slate-800">
                        Performance Ready
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Built with Next.js App Router and Server Components.
                    </p>
                </div>
            </div>

            {/* Posts Section */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl shadow-sm">
                <PostList posts={posts} />
            </div>
        </div>
    );
}