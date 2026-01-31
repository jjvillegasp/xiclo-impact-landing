import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

const CardPartner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { logo: string; website: string }
>(({ className, logo, website, ...props }, ref) => {
  return (
    <Link href={website}>
      <div
        ref={ref}
        {...props}
        className={cn(
          "aspect-4/2 bg-center bg-cover ",
          className
        )}
        style={{ 
          backgroundImage: `url(${logo})`,
          imageRendering: 'auto',
          willChange: 'transform'
        }}
      ></div>
    </Link>
  );
});

CardPartner.displayName = "CardPartner";

export { CardPartner };
