// components/dashboard/UserProfileCard.tsx

import {
  ShieldCheck,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
  Activity,
} from "lucide-react";

export default function UserProfileCard() {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-xl
        shadow-xl
      "
    >
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-50 via-sky-50 to-violet-50 p-6 border-b border-slate-200">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              User Profile
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Workspace identity and account information.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            <Sparkles size={14} />
            Premium Account
          </div>

        </div>

      </div>

      <div className="p-6">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">

          {/* Avatar */}
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              bg-linear-to-br
              from-indigo-600
              via-violet-600
              to-sky-600
              text-3xl
              font-bold
              text-slate-50
              shadow-xl
            "
          >
            AS
          </div>

          {/* Name */}
          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            Ashish Sharma
          </h3>

          {/* Role */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <ShieldCheck size={16} />
            Administrator
          </div>

        </div>

        {/* Contact Information */}
        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

            <Mail
              size={18}
              className="text-indigo-600"
            />

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Email Address
              </p>

              <p className="font-medium text-slate-900">
                admin@example.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

            <User
              size={18}
              className="text-sky-600"
            />

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Workspace Role
              </p>

              <p className="font-medium text-slate-900">
                Content Manager
              </p>
            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">

            <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold">
              Projects
            </p>

            <p className="mt-2 text-2xl font-bold text-indigo-900">
              24
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

            <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">
              Status
            </p>

            <p className="mt-2 text-lg font-bold text-emerald-900">
              Active
            </p>

          </div>

        </div>

        {/* Profile Completion */}
        <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">

          <div className="flex items-center gap-3">

            <CheckCircle2
              size={20}
              className="text-sky-700"
            />

            <div>
              <h4 className="font-semibold text-sky-900">
                Profile Completion
              </h4>

              <p className="text-sm text-slate-600">
                Your workspace profile is fully configured.
              </p>
            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-sky-100">

            <div className="h-full w-full rounded-full bg-linear-to-r from-sky-500 to-indigo-500" />

          </div>

          <p className="mt-2 text-xs font-medium text-sky-700">
            100% Complete
          </p>

        </div>

        {/* Activity Insight */}
        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">

          <div className="flex items-start gap-3">

            <Activity
              size={20}
              className="mt-1 text-violet-700"
            />

            <div>
              <h4 className="font-semibold text-violet-900">
                Workspace Insight
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Administrators have full access to content,
                analytics, comments, categories, tags,
                and system configuration settings.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}