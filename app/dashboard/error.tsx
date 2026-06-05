"use client";

import Button from "../components/ui/Button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="mb-3 text-3xl font-bold text-red-600">
        Dashboard Error
      </h2>

      <p className="mb-6 text-gray-500">
        Failed to load dashboard data.
      </p>

      <Button onClick={reset}>
        Reload Dashboard
      </Button>
    </div>
  );
}