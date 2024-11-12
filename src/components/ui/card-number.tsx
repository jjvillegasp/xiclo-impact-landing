import * as React from "react";
import { cn } from "@/lib/utils";

type CardNumberProps = {
  number: number;
  label: string;
};

const CardNumber = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardNumberProps
>(async ({ className, number, label, ...props }, ref) => {
  const format = new Intl.NumberFormat("es-CO");
  return (
    <div
      {...props}
      className={cn(
        "text-center mr-5 rounded-xl bg-[length:100%_100%] text-white h-60",
        className
      )}
    >
      <p className="font-extrabold text-6xl mt-3">{format.format(number)}</p>
      <p>{label}</p>
    </div>
  );
});

CardNumber.displayName = "CardNumber";

export { CardNumber };
