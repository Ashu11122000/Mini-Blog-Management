"use client";

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
      title={title}
    >
      <p className="mb-6 text-gray-600">
        {message}
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}