import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 px-6">
            <div className="max-w-xl text-center">
                {/* Error Code */}
                <div className="mb-6">
                    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                        Error 404
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-7xl font-extrabold tracking-tight text-slate-900">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-slate-800">
                    Page Not Found
                </h2>

                <p className="mt-4 text-lg text-slate-500">
                    The page you&apos;re looking for doesn&apos;t exist or may have been
                    moved to another location.
                </p>

                {/* Actions */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-indigo-700"
                    >
                        <Home size={18} />
                        Go to Dashboard
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Decorative Card */}
                <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">
                        Need help? Visit the dashboard homepage or check the URL
                        for typing mistakes.
                    </p>
                </div>
            </div>
        </div>
    );
}