import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

const CardPartner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { logo: string; website: string }
>(async ({ className, logo, website, ...props }, ref) => {
  return (
    <Link href={website}>
      <div
        ref={ref}
        {...props}
        className={cn(
          "text-center bg-center bg-cover text-white h-40",
          className
        )}
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </Link>
  );
});

CardPartner.displayName = "CardPartner";

export { CardPartner };
