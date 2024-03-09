import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/public/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "ypeer yinline-flex yh-5 yw-9 yshrink-0 ycursor-pointer yitems-center yrounded-full yborder-2 yborder-transparent yshadow-sm ytransition-colors focus-visible:youtline-none focus-visible:yring-2 focus-visible:yring-ring focus-visible:yring-offset-2 focus-visible:yring-offset-background disabled:ycursor-not-allowed disabled:yopacity-50 data-[state=checked]:ybg-primary data-[state=unchecked]:ybg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "ypointer-events-none yblock yh-4 yw-4 yrounded-full ybg-background yshadow-lg yring-0 ytransition-transform data-[state=checked]:ytranslate-x-4 data-[state=unchecked]:ytranslate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
