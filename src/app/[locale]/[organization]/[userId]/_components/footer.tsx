"use client";

import { Button } from "@/components/ui/button";
import { constant } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";

const Footer = ({ organizationName }: { organizationName: string }) => {
  const h = useTranslations("Header");
  const t = useTranslations("Footer");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const gridFooter = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : "grid-cols-2"
    : "grid-cols-1";

  const center =
    isSafari && isSmallScreen
      ? "text-center justify-center justify-items-center"
      : "";

  return (
    <footer className="bg-black py-14 px-36 footer-padding">
      <div className={cn(`grid md:grid-cols-2 `, gridFooter)}>
        <div className={cn(`customer-center `)}>
          <Image
            alt="Xiclo powered by logo"
            src="/assets/images/xiclo-powered.svg"
            width={150}
            height={100}
          />
          <Button className="mb-32 mt-16 bg-white text-black text-lg hover:bg-white">
            {" "}
            <Link href={constant.xicloDownload}>{t("moreAboutXiclo")} </Link>
          </Button>
        </div>
        <div className="text-white text-lg">
          <p>{t("alliance", { organization: organizationName })}</p>
        </div>
      </div>
      <div
        className={cn(
          `grid md:grid-cols-2 gap-4 mt-10 customer-center `,
          gridFooter
        )}
      >
        <div>
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white text-sm"
          >
            <Link href="#contribution-section">{h("impact")}</Link>
          </Button>
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white text-sm"
          >
            <Link href="#about-project">{h("aboutProject")}</Link>
          </Button>
        </div>
        <div
          className={cn(`text-white text-sm text-end customer-center `, center)}
        >
          <p>{`${t(
            "rightsReserved"
          )} ${organizationName} ${new Date().getFullYear()}`}</p>
          <p>{t("siteByE")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
