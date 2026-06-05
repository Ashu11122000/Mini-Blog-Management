"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
      "
      onClick={onClose}
    >
      {/* Premium Backdrop */}
      <div
        className="
          absolute
          inset-0
          bg-slate-950/55
          backdrop-blur-md
          animate-in
          fade-in
          duration-300
        "
      />

      {/* Modal */}
      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/70
          bg-white/95
          backdrop-blur-xl
          shadow-2xl
          shadow-slate-900/15
          ${sizes[size]}
          animate-in
          fade-in
          zoom-in-95
          duration-300
        `}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* Top Accent */}
        <div
          className="
            absolute
            top-0
            left-0
            h-1
            w-full
            bg-linear-to-r
            from-indigo-500
            via-blue-500
            to-violet-500
          "
        />

        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-indigo-100/50
            blur-3xl
          "
        />

        {/* Header */}
        <div
          className="
            relative
            flex
            items-center
            justify-between
            border-b
            border-slate-200/70
            px-6
            py-5
          "
        >
          <div>
            {title && (
              <h2
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                {title}
              </h2>
            )}

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Manage and review details
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-500
              transition-all
              duration-200
              hover:bg-slate-50
              hover:text-slate-700
              hover:shadow-md
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div
          className="
            relative
            p-6
            text-slate-700
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}