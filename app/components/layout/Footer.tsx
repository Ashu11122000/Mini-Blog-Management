// components/layout/Footer.tsx

import Container from "./Container";
import {
  Code2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-20
        overflow-hidden
        border-t
        border-slate-200/70
        bg-linear-to-b
        from-white
        via-slate-50
        to-slate-100/70
        backdrop-blur-xl
      "
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-64
            w-64
            rounded-full
            bg-blue-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-72
            w-72
            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            flex
            flex-col
            gap-8
            py-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Left Section */}
          <div>
            <h3
              className="
                text-lg
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Mini Blog Management System
            </h3>

            <p
              className="
                mt-2
                max-w-md
                text-sm
                leading-relaxed
                text-slate-600
              "
            >
              A modern content management platform built
              with Next.js App Router, TypeScript, and
              Tailwind CSS for scalable blog operations.
            </p>
          </div>

          {/* Right Section */}
          <div
            className="
              flex
              flex-col
              gap-4
              text-sm
              text-slate-600
              md:items-end
            "
          >
            <div className="flex items-center gap-2">
              <Code2
                size={16}
                className="text-blue-600"
              />
              <span>
                Built with Next.js + TypeScript +
                Tailwind CSS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={16}
                className="text-emerald-600"
              />
              <span>
                Secure • Scalable • Production Ready
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles
                size={16}
                className="text-amber-500"
              />
              <span>
                © {new Date().getFullYear()} All Rights
                Reserved
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div
          className="
            border-t
            border-slate-200/70
            py-5
          "
        >
          <p
            className="
              text-center
              text-xs
              tracking-wide
              text-slate-500
            "
          >
            Designed for modern publishing workflows,
            content management, and dashboard analytics.
          </p>
        </div>
      </Container>
    </footer>
  );
}