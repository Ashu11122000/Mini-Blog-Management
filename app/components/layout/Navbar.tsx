// components/layout/Navbar.tsx

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-indigo-600"
          >
            MiniBlog
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Home
            </Link>

            <Link
              href="/blog/1"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Blog
            </Link>

            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/posts"
              className="text-sm font-medium hover:text-indigo-600"
            >
              Posts
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}