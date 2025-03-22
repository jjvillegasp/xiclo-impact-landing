import { cn } from "@/lib/utils";
import * as React from "react";
import { Avatar, AvatarImage } from "./avatar";

type CardTipProps = {
  icon: string;
  label: string;
};

const CardTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardTipProps
>(({ className, icon, label, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center bg-[#F1F1F1] rounded-lg p-2.5 text-left h-16",
        className
      )}
      {...props}
    >
      <Avatar className="w-10 h-10">
        <AvatarImage src={`/${icon}`} />
      </Avatar>
      <p className="ml-6 text-lg">{label}</p>
    </div>
  );
});

CardTip.displayName = "CardTip";

export { CardTip };
