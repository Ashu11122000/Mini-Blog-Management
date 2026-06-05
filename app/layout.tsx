// app/layout.tsx

import "./globals.css";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "Mini Blog Management",
  description: "Next.js Blog Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}