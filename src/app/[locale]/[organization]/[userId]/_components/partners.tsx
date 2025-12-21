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
  const gridPartners = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : "grid-cols-4"
    : "grid-cols-1";

  if (partners.length > 0) {
    return (
      <div className={cn(`container mx-auto p-8 md:p-0 partner-margin mt-5`)}>
        <p className="text-2xl">
          {t("nowReturn")} <span className="font-extrabold">{t("easier")}</span>
          <span className="font-extrabold">{t("moreEfficient")}</span>
        </p>
        <br />
        <p className="text-6xl text-[#97C355]">
          {t("startTo")}{" "}
          <span>{t("reduceFootprint")}</span>{" "}
          {t("today")}
        </p>
        <p className="mt-5 text-2xl">{t("ordersReturnable")}</p>
        <br />
        <div className={cn(`grid md:grid-cols-4 gap-2 `, gridPartners)}>
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
