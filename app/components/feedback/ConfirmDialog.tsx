"use client";

import {
  AlertTriangle,
  ShieldAlert,
  Trash2,
} from "lucide-react";

import Modal from "../ui/Modal";
import Button from "../ui/Button";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Modal
      isOpen={open}
      onClose={onCancel}
      title=""
    >
      <div className="space-y-6">

        {/* Warning Icon */}
        <div className="flex justify-center">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              border
              border-amber-200
              bg-linear-to-br
              from-amber-50
              to-orange-50
            "
          >
            <AlertTriangle
              size={40}
              className="text-amber-600"
            />
          </div>

        </div>

        {/* Content */}
        <div className="text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-3 leading-relaxed text-slate-600">
            {message}
          </p>

        </div>

        {/* Information Panel */}
        <div
          className="
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            p-4
          "
        >
          <div className="flex items-start gap-3">

            <ShieldAlert
              size={20}
              className="mt-0.5 text-amber-700"
            />

            <div>

              <p className="font-semibold text-amber-900">
                Permanent Action
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                This action cannot be undone.
                Please confirm that you want
                to permanently remove this item.
              </p>

            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <Button
            variant="outline"
            onClick={onCancel}
            className="
              rounded-2xl
              border-slate-300
              px-6
              py-3
            "
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
            className="
              rounded-2xl
              px-6
              py-3
              shadow-lg
            "
          >
            <div className="flex items-center gap-2">
              <Trash2 size={16} />
              Delete Permanently
            </div>
          </Button>

        </div>

      </div>
    </Modal>
  );
}