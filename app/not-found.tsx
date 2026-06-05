import Link from "next/link";
import {
    ArrowLeft,
    Home,
    Search,
    Compass,
    AlertCircle,
} from "lucide-react";

export default function NotFound() {
    return (
        <div
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-linear-to-br
                from-slate-50
                via-white
                to-indigo-50/40
                px-6
            "
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden">
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

                <div
                    className="
                        absolute
                        -left-32
                        -bottom-32
                        h-125
                        w-125
                        rounded-full
                        bg-cyan-200/20
                        blur-3xl
                    "
                />
            </div>

            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-3xl
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-slate-200/70
                    bg-white/80
                    p-8
                    md:p-12
                    text-center
                    backdrop-blur-xl
                    shadow-[0_30px_80px_rgba(15,23,42,0.08)]
                "
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                    <AlertCircle size={16} />
                    Error 404
                </div>

                {/* 404 */}
                <h1
                    className="
                        mt-8
                        text-8xl
                        md:text-9xl
                        font-black
                        tracking-tight
                        bg-linear-to-r
                        from-indigo-600
                        via-violet-600
                        to-purple-600
                        bg-clip-text
                        text-transparent
                    "
                >
                    404
                </h1>

                {/* Title */}
                <h2
                    className="
                        mt-4
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-slate-900
                    "
                >
                    Page Not Found
                </h2>

                <p
                    className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-slate-600
                    "
                >
                    The page you&apos;re looking for may
                    have been moved, deleted, or
                    never existed. Let&apos;s get you
                    back on track.
                </p>

                {/* Information Cards */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                        <Home
                            size={22}
                            className="mx-auto mb-3 text-indigo-600"
                        />

                        <h3 className="font-semibold text-slate-900">
                            Dashboard
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Return to your workspace
                            and continue managing content.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                        <Search
                            size={22}
                            className="mx-auto mb-3 text-cyan-600"
                        />

                        <h3 className="font-semibold text-slate-900">
                            Verify URL
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Double-check the address
                            for typing mistakes.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                        <Compass
                            size={22}
                            className="mx-auto mb-3 text-emerald-600"
                        />

                        <h3 className="font-semibold text-slate-900">
                            Explore
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Browse available content
                            and navigate elsewhere.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/dashboard"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-indigo-600
                            px-6
                            py-3
                            font-semibold
                            text-slate-50
                            shadow-lg
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-indigo-700
                            hover:shadow-xl
                        "
                    >
                        <Home size={18} />
                        Go to Dashboard
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-6
                            py-3
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-300
                            hover:bg-slate-50
                            hover:shadow-md
                        "
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Footer */}
                <div
                    className="
                        mt-10
                        rounded-3xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                    "
                >
                    <p className="text-sm text-slate-500">
                        Need help? Navigate back to the dashboard
                        or verify the URL before trying again.
                    </p>
                </div>
            </div>
        </div>
    );
}