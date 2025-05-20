import { cn } from "../../lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-4 py-2 rounded-md bg-primary text-primary-foreground",
          className
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }