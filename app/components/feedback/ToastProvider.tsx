"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import Toast from "./Toast";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext =
  createContext<ToastContextType | null>(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [message, setMessage] =
    useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {message && (
        <div className="fixed right-4 top-4 z-50">
          <Toast
            message={message}
            onClose={() => setMessage(null)}
          />
        </div>
      )}
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