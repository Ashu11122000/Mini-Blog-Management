"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import Toast from "./Toast";

interface ToastContextType {
  showToast: (message: string) => void;
}

interface ToastItem {
  id: number;
  message: string;
}

const ToastContext =
  createContext<ToastContextType | null>(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  }, []);

  const showToast = useCallback((message: string) => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
      },
    ]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        className="
          fixed
          top-5
          right-5
          z-9999
          flex
          w-full
          max-w-md
          flex-col
          gap-3
          px-4
          sm:px-0
        "
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="
              animate-[toast-slide-in_0.35s_ease-out]
            "
          >
            <Toast
              message={toast.message}
              onClose={() =>
                removeToast(toast.id)
              }
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used within ToastProvider"
    );
  }

  return context;
}