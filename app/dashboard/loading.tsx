import Skeleton from "../components/feedback/Skeleton";

export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border p-5"
        >
          <Skeleton className="mb-4 h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}