import { CardPartner } from "@/components/ui/card-partner";
import { getTranslations } from "next-intl/server";

const Partners = async ({
  partners,
}: {
  partners: [{ logo: string; name: string, website: string }];
}) => {
  const t = await getTranslations("Partner");
  if (partners.length > 0) {
    return (
      <div className="container mx-auto p-8 md:p-0 partner-margin">
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
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
          {partners.map((partner) => (
            <CardPartner logo={partner.logo} key={partner.name} website={partner.website} />
          ))}
        </div>
      </div>
    );
  }
};

export default Partners;
