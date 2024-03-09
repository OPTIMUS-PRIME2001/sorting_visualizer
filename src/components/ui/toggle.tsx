import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/public/lib/utils"

const toggleVariants = cva(
  "yinline-flex yitems-center yjustify-center yrounded-md ytext-sm yfont-medium ytransition-colors hover:ybg-muted hover:ytext-muted-foreground focus-visible:youtline-none focus-visible:yring-1 focus-visible:yring-ring disabled:ypointer-events-none disabled:yopacity-50 data-[state=on]:ybg-accent data-[state=on]:ytext-accent-foreground",
  {
    variants: {
      variant: {
        default: "ybg-transparent",
        outline:
          "yborder yborder-input ybg-transparent yshadow-sm hover:ybg-accent hover:ytext-accent-foreground",
      },
      size: {
        default: "yh-9 ypx-3",
        sm: "yh-8 ypx-2",
        lg: "yh-10 ypx-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
