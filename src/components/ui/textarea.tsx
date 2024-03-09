import * as React from "react"

import { cn } from "@/public/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "yflex ymin-h-[60px] yw-full yrounded-md yborder yborder-input ybg-transparent ypx-3 ypy-2 ytext-sm yshadow-sm placeholder:ytext-muted-foreground focus-visible:youtline-none focus-visible:yring-1 focus-visible:yring-ring disabled:ycursor-not-allowed disabled:yopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
