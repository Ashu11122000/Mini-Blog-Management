import React from "react";
import { Database } from "lucide-react";

interface Column<T> {
  key: keyof T;
  header: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export default function Table<
  T extends Record<string, unknown>
>({
  columns,
  data,
  emptyMessage = "No data available",
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50/40
          p-12
          text-center
          shadow-sm
        "
      >
        <div
          className="
            mb-4
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          <Database
            size={30}
            className="text-indigo-500"
          />
        </div>

        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
          "
        >
          Nothing to display
        </h3>

        <p
          className="
            mt-2
            max-w-md
            text-sm
            text-slate-500
          "
        >
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white
        shadow-lg
        shadow-slate-200/40
      "
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Header */}
          <thead
            className="
              sticky
              top-0
              z-10
              border-b
              border-slate-200
              bg-linear-to-r
              from-slate-50
              via-white
              to-slate-50
            "
          >
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="
                    px-6
                    py-4
                    text-left
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-slate-600
                  "
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="bg-white">
            {data.map((row, index) => (
              <tr
                key={index}
                className="
                  group
                  border-b
                  border-slate-100
                  transition-all
                  duration-200
                  hover:bg-indigo-50/40
                "
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="
                      px-6
                      py-4
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {String(
                      row[column.key] ?? ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-200
          bg-slate-50/80
          px-6
          py-3
        "
      >
        <p
          className="
            text-xs
            font-medium
            text-slate-500
          "
        >
          Total Records: {data.length}
        </p>

        <p
          className="
            text-xs
            text-slate-400
          "
        >
          Data updated in real-time
        </p>
      </div>
    </div>
  );
}