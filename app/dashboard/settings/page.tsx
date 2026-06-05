// app/dashboard/settings/page.tsx

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="text-gray-500 mt-1">
          Configure your blog management system.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Profile Settings
          </h2>

          <div className="space-y-3">
            <input
              type="text"
              defaultValue="Ashish Sharma"
              className="w-full rounded-lg border p-3"
            />

            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Theme Preferences
          </h2>

          <select className="w-full rounded-lg border p-3">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked />
            <span>Email Notifications</span>
          </label>
        </div>
      </div>
    </div>
  );
}