"use client";

import Button from "./components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-600">
            Something Went Wrong
          </h1>

          <p className="mb-6 max-w-md text-gray-600">
            An unexpected error occurred while loading the page.
          </p>

          <Button onClick={() => reset()}>
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}