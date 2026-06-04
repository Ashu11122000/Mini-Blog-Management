import { Bell } from "lucide-react";

export default function DashboardHeader() {
    return (
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
            {/* Logo / Title */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Mini Blog Management
                </h1>
                <p className="text-sm text-slate-500">
                    Manage your content efficiently
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                {/* Notification */}
                <button className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-200">
                    <Bell className="w-5 h-5 text-slate-700" />

                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-11 h-11 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
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
                </div>
            </div>
        </header>
    );
}