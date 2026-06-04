import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    PenSquare,
    Folder,
    Tags,
    MessageSquare,
    BarChart3,
    Settings,
} from "lucide-react";

const menuItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "All Posts",
        href: "/dashboard/posts",
        icon: FileText,
    },
    {
        label: "Create Post",
        href: "/dashboard/posts/create",
        icon: PenSquare,
    },
    {
        label: "Categories",
        href: "/dashboard/categories",
        icon: Folder,
    },
    {
        label: "Tags",
        href: "/dashboard/tags",
        icon: Tags,
    },
    {
        label: "Comments",
        href: "/dashboard/comments",
        icon: MessageSquare,
    },
    {
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="flex min-h-screen w-72 flex-col bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800">
            {/* Logo */}
            <div className="border-b border-slate-800 p-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-lg">
                        MB
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-white">
                            Mini Blog
                        </h2>

                        <p className="text-xs text-slate-400">
                            Content Management
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Main Menu
                </p>

                <div className="space-y-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                                    index === 0
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`}
                            >
                                <Icon
                                    size={20}
                                    className="transition-transform group-hover:scale-110"
                                />

                                <span className="font-medium">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* User Card */}
            <div className="border-t border-slate-800 p-5">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-500 font-semibold text-white">
                        AS
                    </div>

                    <div>
                        <p className="font-medium text-white">
                            Ashish Sharma
                        </p>

                        <p className="text-xs text-slate-400">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}