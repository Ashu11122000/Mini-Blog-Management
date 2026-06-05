// app/dashboard/settings/page.tsx

import {
  User,
  Palette,
  Bell,
  Shield,
  Settings2,
  Sparkles,
  Monitor,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-slate-200/70
          bg-white/80
          p-8
          md:p-10
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(15,23,42,0.08)]
        "
      >
        <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-white to-cyan-50" />

        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-violet-200
                  bg-violet-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-violet-700
                "
              >
                <Sparkles size={16} />
                System Preferences
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  tracking-tight
                  bg-linear-to-r
                  from-violet-600
                  via-indigo-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Settings
              </h1>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Manage your profile, system
                preferences, notifications,
                and dashboard experience.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-indigo-200
                bg-white/80
                px-6
                py-5
                backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-3">
                <Settings2
                  size={20}
                  className="text-indigo-600"
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Configuration
                  </p>

                  <h3 className="font-bold text-indigo-700">
                    Active
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <User
            size={24}
            className="mb-4 text-violet-600"
          />

          <h3 className="font-bold text-slate-900">
            Profile
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Manage personal information and
            account identity.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <Palette
            size={24}
            className="mb-4 text-cyan-600"
          />

          <h3 className="font-bold text-slate-900">
            Appearance
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Customize dashboard themes and
            visual preferences.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <Bell
            size={24}
            className="mb-4 text-amber-600"
          />

          <h3 className="font-bold text-slate-900">
            Notifications
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Control alerts and communication
            preferences.
          </p>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Profile Settings */}
        <div
          className="
            rounded-[28px]
            border
            border-slate-200/70
            bg-white
            p-7
            shadow-sm
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-violet-100
              "
            >
              <User
                size={22}
                className="text-violet-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Profile Settings
              </h2>

              <p className="text-sm text-slate-500">
                Update personal information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Ashish Sharma"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  text-slate-800
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-indigo-100
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="admin@example.com"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  text-slate-800
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-indigo-100
                "
              />
            </div>
          </div>
        </div>

        {/* Theme Preferences */}
        <div
          className="
            rounded-[28px]
            border
            border-slate-200/70
            bg-white
            p-7
            shadow-sm
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-cyan-100
              "
            >
              <Monitor
                size={22}
                className="text-cyan-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Theme Preferences
              </h2>

              <p className="text-sm text-slate-500">
                Customize your workspace
              </p>
            </div>
          </div>

          <select
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              px-4
              py-3
              text-slate-800
              focus:border-indigo-500
              focus:outline-none
              focus:ring-4
              focus:ring-indigo-100
            "
          >
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>

        {/* Notifications */}
        <div
          className="
            rounded-[28px]
            border
            border-slate-200/70
            bg-white
            p-7
            shadow-sm
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-amber-100
              "
            >
              <Bell
                size={22}
                className="text-amber-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Notifications
              </h2>

              <p className="text-sm text-slate-500">
                Communication preferences
              </p>
            </div>
          </div>

          <label
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-4
            "
          >
            <div>
              <h4 className="font-medium text-slate-800">
                Email Notifications
              </h4>

              <p className="text-sm text-slate-500">
                Receive updates and alerts
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />
          </label>
        </div>

        {/* Security */}
        <div
          className="
            rounded-[28px]
            border
            border-slate-200/70
            bg-white
            p-7
            shadow-sm
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-emerald-100
              "
            >
              <Shield
                size={22}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Security Status
              </h2>

              <p className="text-sm text-slate-500">
                System protection overview
              </p>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-emerald-200
              bg-emerald-50
              p-4
            "
          >
            <div className="flex items-center gap-3">
              <Shield
                size={18}
                className="text-emerald-600"
              />

              <span className="font-semibold text-emerald-700">
                All systems secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}