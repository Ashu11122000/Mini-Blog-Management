import {
  TrendingUp,
  TrendingDown,
  Eye,
  FileText,
  MessageSquare,
  FolderKanban,
  Activity,
  Icon,
} from "lucide-react";

interface Props {
  title: string;
  value: number;
  change: string;
}

interface IconProps {
  title: string;
  size?: number;
  className?: string;
}

function StatIcon({ title, ...props }: IconProps) {
  const lower = title.toLowerCase();

  if (lower.includes("post")) return <FileText {...props} />;
  if (lower.includes("view")) return <Eye {...props} />;
  if (lower.includes("comment")) return <MessageSquare {...props} />;
  if (lower.includes("categor")) return <FolderKanban {...props} />;

  return <Activity {...props} />;
}

export default function StatsCard({
  title,
  value,
  change,
}: Props) {
  const isPositive = change.startsWith("+");

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Top Gradient Border */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          bg-linear-to-r
          from-indigo-600
          via-violet-600
          to-sky-600
        "
      />

      {/* Decorative Glow */}
      <div
        className="
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-indigo-100
          opacity-40
          blur-3xl
          transition-all
          duration-300
          group-hover:opacity-70
        "
      />

      <div className="relative">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {title}
            </p>

            <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
              {value.toLocaleString()}
            </h3>

          </div>

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-indigo-100
              via-violet-100
              to-sky-100
            "
          >
            <Icon
                          size={26}
                          className="text-indigo-700" iconNode={[]}            />
          </div>

        </div>

        {/* Progress Visualization */}
        <div className="mt-6">

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className={`
                h-full
                rounded-full
                bg-linear-to-r
                ${
                  isPositive
                    ? "from-emerald-500 via-green-500 to-teal-500"
                    : "from-rose-500 via-red-500 to-orange-500"
                }
              `}
              style={{
                width: isPositive
                  ? "82%"
                  : "45%",
              }}
            />

          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">

          <span
            className={`
              inline-flex
              items-center
              gap-1.5
              rounded-full
              px-3
              py-1.5
              text-xs
              font-semibold
              ${
                isPositive
                  ? `
                    border border-emerald-200
                    bg-emerald-50
                    text-emerald-700
                  `
                  : `
                    border border-rose-200
                    bg-rose-50
                    text-rose-700
                  `
              }
            `}
          >
            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}

            {change}
          </span>

          <span className="text-xs font-medium text-slate-500">
            vs previous month
          </span>

        </div>

        {/* Bottom Analytics Note */}
        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-3">

          <p className="text-xs text-slate-600">
            {isPositive
              ? "Strong growth trend detected."
              : "Performance declined compared to the previous period."}
          </p>

        </div>

      </div>
    </div>
  );
}