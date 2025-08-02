import { cn } from "@/lib/utils";
import * as React from "react";
import { Avatar, AvatarImage } from "./avatar";

type CardTipProps = {
  icon: string;
  label: string;
  iconSize: string
};

const CardTip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardTipProps
>(({ className, icon, label, iconSize, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center bg-[#F1F1F1] rounded-lg p-2.5 text-left",
        className
      )}
      {...props}
    >
      <Avatar className={iconSize}>
        <AvatarImage src={`/${icon}`} />
      </Avatar>
      <p className="ml-6 text-tip-lg">{label}</p>
    </div>
  );
});

CardTip.displayName = "CardTip";

export { CardTip };
