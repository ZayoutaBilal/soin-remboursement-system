
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      closeButton={false}
      // @ts-ignore - The type definitions are incomplete but the prop is supported
      dismissible={true}
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:toast-hover-grow group-[.toaster]:cursor-pointer group-[.toaster]:larger-toast",
          title: "group-[.toast]:text-foreground group-[.toast]:toast-title",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:toast-description",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
        duration: 6000, // Increase duration to give users more time to read
      }}
      {...props}
    />
  )
}

export { Toaster, Sonner as toast }
