// components/layout/Footer.tsx

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mini Blog Management System
          </p>

          <p className="text-sm text-gray-500">
            Built with Next.js + TypeScript + Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}