"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardTip } from "@/components/ui/card-tip";
import { useTranslations } from "next-intl";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";

const CareTips = () => {
  const t = useTranslations("Impact");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const gridTips = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : "grid-cols-2"
    : "grid-cols-1";

  return (
    <div
      className={cn(
        `grid md:grid-cols-2 p-8 gap-10 text-center rounded-lg bg-white text-black h-auto items-center mx-auto container my-10`,
        gridTips
      )}
    >
      <div>
        <div className="flex items-center gap-8">
          <p className="font-extrabold text-6xl text-left flex-1">
            {t("tipsOf")} <br /> {t("care")}
          </p>
        </div>
        <div className="my-5 text-justify text-xl">
          <p>{t("designAssets")}</p>
          <br />
          <p>{t("careAssets")}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CardTip icon="assets/images/microwave.png" label={t("tipMicrowave")} iconSize="w-11 h-11" />
        <CardTip icon="assets/images/soap.png" label={t("tipTwo")} iconSize="w-10 h-10"/>
        <CardTip icon="assets/images/bowl.png" label={t("tipReturnCapped")} iconSize="w-9 h-9 pl-2"/>
        <CardTip icon="assets/images/bag.png" label={t("tipScratchBags")} iconSize="w-9 h-9 pl-2"/>
        <CardTip icon="assets/images/trash.png" label={t("tipThrow")} iconSize="w-9 h-9 pl-2"/>
      </div>
    </div>
  );
};

export default CareTips;
