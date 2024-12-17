import { Button } from "@/components/ui/button";
import { constant } from "@/constants";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Footer = async ({ organizationName }: { organizationName: string }) => {
  const h = await getTranslations("Header");
  const t = await getTranslations("AboutProject");

  return (
    <footer className="bg-black py-14 px-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="customer-center">
          <Image
            alt="Xiclo powered by logo"
            src="/assets/images/xiclo-powered.svg"
            width={150}
            height={100}
          />
          <Link href={constant.xicloDownload}>
            <Button className="mb-32 mt-16 bg-white text-black">
              {t("downloadXiclo")}
            </Button>
          </Link>
        </div>
        <div className="text-white text-base">
          <p>
            {organizationName} {t("joinXiclo")}
          </p>
          <br />
          <p>{t("enjoyDishes")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 customer-center">
        <div>
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white text-base text-sm"
          >
            <Link href="#contribution-section">{h("impact")}</Link>
          </Button>
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white text-base text-sm"
          >
            <Link href="#about-project">{h("aboutProject")}</Link>
          </Button>
        </div>
        <div className="text-white text-xs text-end customer-center">
          <p>{`${t("rightsReserved")} ${organizationName} ${new Date().getFullYear()}`}</p>
          <p>{t("siteByE")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
