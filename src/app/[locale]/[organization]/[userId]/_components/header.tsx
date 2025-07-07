"use client";
import { Button } from "@/components/ui/button";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Header = ({
  organizationLogo,
  urlNewOrder,
  webSite,
  organizationLogoSecond,
}: {
  organizationLogo: string;
  urlNewOrder: string;
  webSite: string;
  organizationLogoSecond: string;
}) => {
  const t = useTranslations("Header");
  const [bgColor, setBgColor] = useState("");
  const [bgLogo, setBgLogo] = useState(organizationLogo);
  const [sizeLogo, setSizeLogo] = useState("");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const display = isSafari && isSmallScreen ? "hidden" : "";
  const grid = isSafari
    ? isSmallScreen
      ? "grid-cols-2"
      : " grid-cols-3"
    : " grid-cols-2";

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      setBgColor("bg-white");
      if (organizationLogoSecond) {
        setBgLogo(organizationLogoSecond);
        setSizeLogo("max-w-10");
      }
    } else {
      setBgColor("");
      setBgLogo(organizationLogo);
      setSizeLogo("");
    }
  }, [organizationLogo, organizationLogoSecond]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={cn(
        `grid md:grid-cols-3 text-white justify-items-stretch sticky w-full p-4 top-0 z-100 bg-white`,
        bgColor,
        grid
      )}
    >
      <Avatar className={cn("w-32 h-10 ", sizeLogo)}>
        <Link href={webSite}>
          <AvatarImage src={bgLogo} />
        </Link>
      </Avatar>
      <div className={cn("flex justify-center gap-8 menu ", display)}>
        <Button
          variant="link"
          className="text-black font-semibold hover:underline decoration-black text-lg"
        >
          <Link href="#contribution-section">{t("impact")}</Link>
        </Button>
        <Button
          variant="link"
          className="text-black font-semibold hover:underline decoration-black text-lg"
        >
          <Link href="#about-project">{t("aboutProject")}</Link>
        </Button>
      </div>
      <Link className="w-fit items-center justify-self-end" href={urlNewOrder}>
        <Button className="bg-black text-white text-base hover:bg-black">
          {t("newOrder")}
        </Button>
      </Link>
    </header>
  );
};

export default Header;
