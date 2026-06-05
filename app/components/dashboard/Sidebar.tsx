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
  Sparkles,
  Activity,
  ChevronRight,
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
    <aside
      className="
        flex
        min-h-screen
        w-80
        flex-col
        border-r
        border-slate-800
        bg-linear-to-b
        from-slate-950
        via-slate-900
        to-slate-950
      "
    >
      {/* Logo Area */}
      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-3xl
              bg-linear-to-br
              from-indigo-600
              via-violet-600
              to-sky-600
              shadow-xl
            "
          >
            <Sparkles
              size={24}
              className="text-slate-100"
            />
          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-100">
              Mini Blog
            </h2>

            <p className="text-sm text-slate-400">
              Professional CMS Platform
            </p>

          </div>

        </div>

        {/* Workspace Badge */}
        <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">

          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Workspace
          </p>

          <p className="mt-1 font-semibold text-slate-200">
            Content Management
          </p>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Navigation
        </p>

        <div className="space-y-2">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              index === 0;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-3.5
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? `
                        bg-linear-to-r
                        from-indigo-600
                        via-violet-600
                        to-sky-600
                        text-slate-50
                        shadow-lg
                      `
                      : `
                        text-slate-300
                        hover:bg-slate-800
                        hover:text-slate-100
                      `
                  }
                `}
              >

                <div className="flex items-center gap-3">

                  <Icon
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="font-medium">
                    {item.label}
                  </span>

                </div>

                <ChevronRight
                  size={16}
                  className={`
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

              </Link>
            );
          })}

        </div>

        {/* Analytics Widget */}
        <div className="mt-8 rounded-3xl border border-sky-500/20 bg-sky-500/10 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/20">
              <Activity
                size={20}
                className="text-sky-400"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-sky-400">
                Performance
              </p>

              <p className="font-semibold text-slate-200">
                Dashboard Active
              </p>
            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[86%] rounded-full bg-linear-to-r from-sky-500 to-indigo-500" />
          </div>

          <p className="mt-2 text-xs text-slate-400">
            System health: 86%
          </p>

        </div>

      </nav>

      {/* Footer User Card */}
      <div className="border-t border-slate-800 p-5">

        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/80
            p-4
            backdrop-blur-xl
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-br
                from-indigo-500
                via-violet-500
                to-sky-500
                font-bold
                text-slate-50
              "
            >
              AS
            </div>

            <div>

              <p className="font-semibold text-slate-100">
                Ashish Sharma
              </p>

              <p className="text-xs text-slate-400">
                Administrator
              </p>

            </div>

          </div>

          <div className="mt-4 rounded-2xl bg-slate-800 p-3">

            <p className="text-xs uppercase tracking-wider text-slate-500">
              Account Status
            </p>

            <p className="mt-1 text-sm font-medium text-emerald-400">
              Premium Workspace
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}