import * as React from "react";
import { cn } from "@/lib/utils";

const CardPartner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { logo: string }
>(async ({ className, logo, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        "text-center bg-[length:100%_100%] text-white h-40",
        className
      )}
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
  );
});

CardPartner.displayName = "CardPartner";

export { CardPartner };
