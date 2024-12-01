import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, min = 0, max = 10, step = 1, ...props }, ref) => {
  const steps = Array.from(
    { length: max / step + 1 },
    (_, index) => index * step
  );

  return (
    <div className="w-full">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
        max={max}
        step={step}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
          <SliderPrimitive.Range className="absolute h-full bg-green-500" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border bg-green-500 ring-offset-green-500 transition-colors disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      {/* Render step markers below the slider */}
      <div className="relative flex justify-between mt-2 text-sm text-gray-700">
        {steps.length < 13 &&
          steps.map((stepValue) => (
            <span key={stepValue} className="w-4 text-center font-bold">
              {stepValue + min}
            </span>
          ))}
      </div>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
