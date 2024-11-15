import { cn } from "@/lib/utils";
import * as React from "react";

const CardPartner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { logo: string }
>(async ({ className, logo, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "text-center bg-center bg-cover text-white h-40",
        className
      )}
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
  );
});

CardPartner.displayName = "CardPartner";

export { CardPartner };
