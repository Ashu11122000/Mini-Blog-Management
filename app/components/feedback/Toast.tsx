"use client";

import { X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({
  message,
  onClose,
}: ToastProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg">
      <span>{message}</span>

      <button onClick={onClose}>
        <X size={18} />
      </button>
    </div>
  );
}