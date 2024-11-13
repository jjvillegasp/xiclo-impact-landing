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
>(async ({ className, icon, label, ...props }) => {
  return (
    <div
      className={cn(
        "flex items-center bg-[#F1F1F1] rounded-lg p-2.5 text-left h-24",
        className
      )}
      {...props}
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={`/${icon}`} />
      </Avatar>
      <p className="ml-6">{label}</p>
    </div>
  );
});

CardTip.displayName = "CardTip";

export { CardTip };
