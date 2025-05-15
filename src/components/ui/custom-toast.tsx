
import { AlertCircle, CheckCircle, InfoIcon, XCircle } from "lucide-react";
import { toast as sonnerToast } from "sonner";
import { useToast } from "@/hooks/use-toast";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastOptions {
  title?: string;
  description: string;
  duration?: number;
}

const toastIcons = {
  success: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  error: <XCircle className="h-5 w-5 text-red-500" />,
  warning: <AlertCircle className="h-5 w-5 text-amber-500" />,
  info: <InfoIcon className="h-5 w-5 text-sky-500" />
};

export function useCustomToast() {
  const { toast } = useToast();
  
  const showToast = (type: ToastType, { title, description, duration = 5000 }: ToastOptions) => {
    // For shadcn toast
    toast({
      title: title,
      description: description,
      duration: duration,
      variant: type === "error" ? "destructive" : "default",
      className: type === "success" 
        ? "toast-success" 
        : type === "error" 
        ? "toast-error" 
        : type === "warning"
        ? "toast-warning"
        : "toast-info"
    });
    
    // For sonner toast (more modern looking)
    sonnerToast[type](title || (type.charAt(0).toUpperCase() + type.slice(1)), {
      description,
      duration,
      icon: toastIcons[type],
      className: `animate-fade-in toast-${type}`
    });
  };
  
  return {
    success: (options: ToastOptions) => showToast("success", options),
    error: (options: ToastOptions) => showToast("error", options),
    warning: (options: ToastOptions) => showToast("warning", options),
    info: (options: ToastOptions) => showToast("info", options)
  };
}
