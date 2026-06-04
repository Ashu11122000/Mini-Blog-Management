import CreatePostForm from "../../../components/posts/CreatePostForm";

export default function CreatePostPage() {
    return (
        <div className="mx-auto max-w-6xl space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-cyan-50 opacity-90" />

                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            Create New Post
                        </h1>

                        <p className="mt-4 max-w-2xl text-lg text-slate-500">
                            Share your ideas, tutorials, insights, and stories
                            with your audience through beautifully crafted blog
                            posts.
                        </p>
                    </div>

                    {/* Status Cards */}
                    <div className="flex flex-wrap gap-4">
                        <div className="rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4">
                            <p className="text-xs uppercase tracking-wider text-violet-500">
                                Status
                            </p>

                            <p className="mt-1 font-bold text-violet-700">
                                Draft Mode
                            </p>
                        </div>

                        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-4">
                            <p className="text-xs uppercase tracking-wider text-cyan-500">
                                Content
                            </p>

                            <p className="mt-1 font-bold text-cyan-700">
                                New Article
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tips Section */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 text-2xl">✍️</div>

                    <h3 className="font-semibold text-slate-800">
                        Engaging Title
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Create a compelling title that captures attention.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 text-2xl">📚</div>

                    <h3 className="font-semibold text-slate-800">
                        Clear Category
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Organize your content for better discoverability.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 text-2xl">🚀</div>

                    <h3 className="font-semibold text-slate-800">
                        Publish Ready
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Review your content before publishing to readers.
                    </p>
                </div>
            </div>

            {/* Form */}
            <CreatePostForm />
        </div>
    );
}