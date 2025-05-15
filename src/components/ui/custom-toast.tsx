
import { AlertCircle, CheckCircle, InfoIcon, X, XCircle } from "lucide-react";
import { toast as sonnerToast } from "sonner";
import { useToast } from "@/hooks/use-toast";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastOptions {
  title?: string;
  description: string;
  duration?: number;
  useClassic?: boolean;
}

const toastIcons = {
  success: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  error: <XCircle className="h-5 w-5 text-red-500" />,
  warning: <AlertCircle className="h-5 w-5 text-amber-500" />,
  info: <InfoIcon className="h-5 w-5 text-sky-500" />
};

const toastClasses = {
  success: "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200",
  error: "bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-600 text-red-800 dark:text-red-200",
  warning: "bg-amber-50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-600 text-amber-800 dark:text-amber-200",
  info: "bg-sky-50 dark:bg-sky-900/30 border-sky-300 dark:border-sky-600 text-sky-800 dark:text-sky-200"
};

const toastVariants: Record<ToastType, "default" | "destructive" | "success" | "warning" | "info"> = {
  success: "success",
  error: "destructive",
  warning: "warning",
  info: "info"
};

export function useCustomToast() {
  const { toast } = useToast();
  
  const showToast = (type: ToastType, { title, description, duration = 5000, useClassic = false }: ToastOptions) => {
    // Only use sonner toast (more modern looking with hover effects)
    sonnerToast[type](title || (type.charAt(0).toUpperCase() + type.slice(1)), {
      description,
      duration,
      icon: toastIcons[type],
      className: `animate-fade-in toast-${type} toast-hover-grow`,
      closeButton: true
    });
  };
  
  return {
    success: (options: ToastOptions) => showToast("success", options),
    error: (options: ToastOptions) => showToast("error", options),
    warning: (options: ToastOptions) => showToast("warning", options),
    info: (options: ToastOptions) => showToast("info", options)
  };
}
