import { CardPartner } from "@/components/ui/card-partner";
import { getTranslations } from "next-intl/server";

function renderPartner(partner: any) {
  return <CardPartner logo={partner.logo} key={partner.name} />;
}

const Partners = async ({ partners }: { partners: [] }) => {
  const t = await getTranslations("Partner");
  if (partners.length > 0) {
    return (
      <div className="margin-sc mb-40">
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
        <div className={`grid grid-cols-4 gap-2`}>
          {partners.map((partner) => renderPartner(partner))}
        </div>
      </div>
    );
  }
};

export default Partners;
