// app/layout.tsx

import "./globals.css";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Mini Blog Management",
    template: "%s | Mini Blog Management",
  },
  description:
    "Modern Blog Management Application built with Next.js App Router, TypeScript, and Tailwind CSS.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Blog",
    "CMS",
    "Dashboard",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Ashish Sharma",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          bg-linear-to-br
          from-slate-50
          via-white
          to-indigo-50/30
          text-slate-800
          antialiased
        "
      >
        {/* Ambient Background Effects */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            overflow-hidden
            -z-10
          "
        >
          {/* Top Right Glow */}
          <div
            className="
              absolute
              -right-32
              -top-32
              h-125
              w-125
              rounded-full
              bg-violet-200/20
              blur-3xl
            "
          />

          {/* Bottom Left Glow */}
          <div
            className="
              absolute
              -left-32
              -bottom-32
              h-125
              w-125
              rounded-full
              bg-cyan-200/20
              blur-3xl
            "
          />

          {/* Center Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/3
              h-100
              w-100
              -translate-x-1/2
              rounded-full
              bg-indigo-100/20
              blur-3xl
            "
          />
        </div>

        {/* Page Structure */}
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}