import { CardPartner } from "@/components/ui/card-partner";
import { getTranslations } from "next-intl/server";

const Partners = async ({
  partners,
}: {
  partners: [{ logo: string; name: string }];
}) => {
  const t = await getTranslations("Partner");
  if (partners.length > 0) {
    return (
      <div className="container mx-auto mb-40 p-8 md:p-0">
        <p className="text-lg">
          {t("nowReturn")} <span className="font-extrabold">{t("easier")}</span>
          <br /> <span className="font-extrabold">{t("moreEfficient")}</span>
        </p>
        <br />
        <p className="text-5xl text-[#97C355]">
          {t("startTo")}{" "}
          <span className="font-extrabold">{t("reduceFootprint")}</span>{" "}
          {t("today")}
        </p>
        <p className="mt-5 text-lg">{t("ordersReturnable")}</p>
        <br />
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
          {partners.map((partner) => (
            <CardPartner logo={partner.logo} key={partner.name} />
          ))}
        </div>
      </div>
    );
  }
};

export default Partners;
