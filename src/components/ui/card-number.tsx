import { cn } from "@/lib/utils";
import * as React from "react";

type CardNumberProps = {
  number: number;
  label: string;
};

const CardNumber = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardNumberProps
>(async ({ className, number, label, ...props }) => {
  const format = new Intl.NumberFormat("es-CO");
  return (
    <div
      {...props}
      className={cn(
        "text-center rounded-xl bg-cover text-white h-60 bg-center",
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
