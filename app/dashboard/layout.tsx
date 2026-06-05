import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-white
        to-indigo-50/30
      "
    >
      {/* Ambient Background Effects */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          overflow-hidden
        "
      >
        {/* Top Right Glow */}
        <div
          className="
            absolute
            -right-32
            -top-32
            h-125
            w-125
            rounded-full
            bg-violet-200/20
            blur-3xl
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-125
            w-125
            rounded-full
            bg-cyan-200/20
            blur-3xl
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-100
            w-100
            -translate-x-1/2
            rounded-full
            bg-indigo-100/20
            blur-3xl
          "
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Workspace */}
      <div
        className="
          relative
          flex
          min-h-screen
          flex-1
          flex-col
        "
      >
        {/* Header */}
        <DashboardHeader />

        {/* Content Area */}
        <main
          className="
            relative
            flex-1
            p-6
            md:p-8
            xl:p-10
          "
        >
          {/* Content Wrapper */}
          <div
            className="
              relative
              mx-auto
              max-w-450
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}