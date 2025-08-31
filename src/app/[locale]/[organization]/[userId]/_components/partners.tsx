"use client";

import { CardPartner } from "@/components/ui/card-partner";
import { useTranslations } from "next-intl";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";

const Partners = ({
  partners,
}: {
  partners: [{ logo: string; name: string; website: string }];
}) => {
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const t = useTranslations("Partner");
  const gridP = partners.length >= 4 ? "grid-cols-4" : "grid-cols-" + partners.length
  const gridPartners = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : gridP
    : "grid-cols-1";

  if (partners.length > 0) {
    return (
      <div className={cn(`container mx-auto p-8 md:p-0 partner-margin `)}>
        <p className="text-2xl">
          {t("nowReturn")} <span className="font-extrabold">{t("easier")}</span>
          <span className="font-extrabold">{t("moreEfficient")}</span>
        </p>
        <br />
        <p className="text-6xl text-[#97C355]">
          {t("startTo")}{" "}
          <span className="font-extrabold">{t("reduceFootprint")}</span>{" "}
          {t("today")}
        </p>
        <p className="mt-5 text-2xl">{t("ordersReturnable")}</p>
        <br />
        <div className={cn(`grid `, `md:` + gridP, `gap-2 `, gridPartners)}>
          {partners.map((partner) => (
            <CardPartner
              logo={partner.logo}
              key={partner.name}
              website={partner.website}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Partners;
