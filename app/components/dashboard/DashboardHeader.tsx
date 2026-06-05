import {
  Bell,
  Search,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-slate-200/70
        bg-white/80
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div className="flex h-24 items-center justify-between px-6 lg:px-10">

        {/* Left Section */}
        <div className="flex items-center gap-8">

          {/* Title */}
          <div>
            <div className="flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Mini Blog Management
                </h1>

                <p className="text-sm text-slate-500">
                  Professional Content Dashboard
                </p>
              </div>

            </div>
          </div>

          {/* Search */}
          <div className="hidden xl:flex">
            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                w-80
                transition-all
                duration-300
                hover:border-indigo-300
                focus-within:border-indigo-400
                focus-within:bg-white
              "
            >
              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search posts, comments, categories..."
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-slate-700
                  outline-none
                  placeholder:text-slate-400
                "
              />
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 lg:gap-6">

          {/* Date Widget */}
          <div className="hidden lg:block rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">
              Today
            </p>

            <p className="text-sm font-medium text-sky-900">
              {today}
            </p>
          </div>

          {/* Notification */}
          <button
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition-all
              duration-300
              hover:border-indigo-300
              hover:shadow-lg
            "
          >
            <Bell
              size={20}
              className="text-slate-700"
            />

            <span
              className="
                absolute
                -top-1
                -right-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-rose-500
                text-[10px]
                font-bold
                text-white
                ring-2
                ring-white
              "
            >
              3
            </span>
          </button>

          {/* User Profile */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-3
              py-2
              cursor-pointer
              transition-all
              duration-300
              hover:border-indigo-300
              hover:shadow-lg
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-br
                from-indigo-600
                via-violet-600
                to-sky-600
                text-sm
                font-bold
                text-white
                shadow-md
              "
            >
              AS
            </div>

            <div className="hidden sm:block">
              <p className="font-semibold text-slate-900">
                Ashish Sharma
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden sm:block text-slate-400"
            />
          </div>

        </div>

      </div>
    </header>
  );
}