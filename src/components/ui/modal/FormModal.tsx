
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
import { UserRole } from "@/types/healthcare";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  role?: UserRole;
  isSubmitting?: boolean;
  onSubmit: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function FormModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  confirmLabel = "Enregistrer",
  cancelLabel = "Annuler",
  role = "doctor",
  isSubmitting = false,
  onSubmit,
  size = "md"
}: FormModalProps) {
  const sizeClasses = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
    "full": "sm:max-w-[calc(100vw-2rem)]"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`animate-scale-in ${sizeClasses[size]}`}>
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="transition-all duration-200"
          >
            {cancelLabel}
          </Button>
          <Button
            variant={role}
            onClick={onSubmit}
            disabled={isSubmitting}
            className="transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
          >
            {isSubmitting ? "Traitement en cours..." : confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
