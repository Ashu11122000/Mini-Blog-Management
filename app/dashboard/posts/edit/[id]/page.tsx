interface EditPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPostPage({
    params,
}: EditPostPageProps) {
    const { id } = await params;

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-cyan-50 opacity-80" />

                <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            Edit Post
                        </h1>

                        <p className="mt-3 text-lg text-slate-500">
                            Update and manage your blog post content.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {/* Post ID Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>

                            <span className="font-semibold text-indigo-700">
                                Post #{id}
                            </span>
                        </div>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

                            <span className="font-semibold text-emerald-700">
                                Ready to Edit
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3">

                    <div>
                        <h2 className="text-xl font-bold text-slate-800">
                            Post Editor
                        </h2>

                        <p className="text-slate-500">
                            Modify the title, category, and content of your post.
                        </p>
                    </div>
                </div>

                {/* EditPostForm will be rendered here */}
            </div>
        </div>
    );
}