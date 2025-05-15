
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  isSubmitting?: boolean;
  onSubmit: () => void;
  onCancel?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}

export function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  isSubmitting = false,
  onSubmit,
  onCancel,
  size = "md"
}: FormDialogProps) {
  const handleClose = () => {
    if (onCancel) {
      onCancel();
    }
    onOpenChange(false);
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`animate-fade-in ${sizeClasses[size]}`}>
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter className="mt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="transition-all duration-200"
          >
            {cancelLabel}
          </Button>
          <Button
            variant="success"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {isSubmitting ? "Processing..." : submitLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
