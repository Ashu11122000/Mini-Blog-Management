// components/layout/Navbar.tsx

import Link from "next/link";
import Container from "./Container";
import {
  LayoutDashboard,
  FileText,
  Home,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/70
        bg-white/80
        backdrop-blur-xl
        supports-backdrop-filter:bg-white/70
      "
    >
      {/* Top Accent Line */}
      <div
        className="
          h-0.5
          w-full
          bg-linear-to-r
          from-indigo-500
          via-blue-500
          to-cyan-500
        "
      />

      <Container>
        <nav
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          {/* Logo Section */}
          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-br
                from-indigo-600
                via-blue-600
                to-cyan-600
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <Sparkles size={18} />
            </div>

            <div>
              <h1
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                MiniBlog
              </h1>

              <p
                className="
                  text-xs
                  font-medium
                  text-slate-500
                "
              >
                Content Management Platform
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-indigo-600
              "
            >
              <Home size={16} />
              Home
            </Link>

            <Link
              href="/blog/1"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-indigo-600
              "
            >
              <FileText size={16} />
              Blog
            </Link>

            <Link
              href="/dashboard"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-indigo-600
              "
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>

            <Link
              href="/dashboard/posts"
              className="
                rounded-xl
                bg-linear-to-r
                from-indigo-600
                to-blue-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-50
                shadow-lg
                shadow-indigo-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-indigo-500/30
              "
            >
              Manage Posts
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}