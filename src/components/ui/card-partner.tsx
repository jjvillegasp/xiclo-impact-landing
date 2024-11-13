import { cn } from "@/lib/utils";
import * as React from "react";

const CardPartner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(async ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "text-center bg-[length:100%_100%] text-white h-60 w-72",
        className
      )}
    ></div>
  );
});

CardPartner.displayName = "CardPartner";

export { CardPartner };
