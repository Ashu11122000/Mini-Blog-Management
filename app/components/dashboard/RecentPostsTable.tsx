import { recentPosts } from "../../data/dashboard";

export default function RecentPostsTable() {
    return (
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Recent Posts
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Latest articles published on your blog.
                    </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    View All
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Title
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Category
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Views
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                                Comments
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {recentPosts.map((post) => (
                            <tr
                                key={post.id}
                                className="border-b border-slate-100 transition hover:bg-slate-50"
                            >
                                {/* Title */}
                                <td className="px-6 py-5">
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {post.title}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Post #{post.id}
                                        </p>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-6 py-5">
                                    <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                                        {post.category}
                                    </span>
                                </td>

                                {/* Views */}
                                <td className="px-6 py-5">
                                    <span className="inline-flex rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                                        {post.views.toLocaleString()}
                                    </span>
                                </td>

                                {/* Comments */}
                                <td className="px-6 py-5">
                                    <span className="inline-flex rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                                        {post.comments}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}