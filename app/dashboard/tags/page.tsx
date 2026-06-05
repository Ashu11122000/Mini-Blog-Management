// app/dashboard/tags/page.tsx

const tags = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Web Development",
];

export default function TagsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tags Management</h1>
        <p className="text-gray-500 mt-1">
          Manage blog tags and content categorization.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}