"use client";

import { Button } from "@/components/ui/button";
import { constant } from "@/constants";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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
        <div className="button-hidden">
          <div className="flex gap-8">
            <Button
              variant="link"
              className="bg-white text-black font-extrabold hover:underline decoration-white text-base w-sm button-hidden"
            >
              <Link href="#contribution-section">
                <span>{h("impact")}</span>
              </Link>
            </Button>
            <Button
              variant="link"
              className="bg-white text-black font-extrabold hover:underline decoration-white text-base w-sm button-hidden"
            >
              <Link href="#about-project">
                <span>{h("aboutProject")}</span>
              </Link>
            </Button>
          </div>
          <div className="text-white text-lg mt-20 my-20">
            <p>{t("alliance", { organization: organizationName })}</p>
          </div>
        </div>
        <div className={cn(`customer-center mt-5`)}>
          <Image
            alt="Xiclo powered by logo"
            src="/assets/images/xiclo-powered.svg"
            width={150}
            height={100}
          />
          <Button className="mb-10 mt-16 bg-white text-black text-base hover:bg-white font-extrabold">
            <Link href={constant.xicloDownload}>{t("moreAboutXiclo")} </Link>
          </Button>
        </div>
        <div className="text-white text-lg text-hidden">
          <p>{t("alliance", { organization: organizationName })}</p>
        </div>
      </div>
      <div className={cn(`mt-10 customer-center `, gridFooter)}>
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
