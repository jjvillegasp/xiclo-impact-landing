"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import MenuHeader from "./menu-header";
import { useBrowserDetection } from "@/hooks/use-browser-detection";

const Header = ({
  organizationLogo,
  organizationVideo,
  urlNewOrder,
}: {
  organizationLogo: string;
  organizationVideo: string;
  urlNewOrder: string;
}) => {
  const t = useTranslations("Header");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const fontSizeSubtitle = isSafari && isSmallScreen ? "text-base" : "";
  const fontSizeTitle = isSafari && isSmallScreen ? "text-6xl" : "";

  return (
    <header
      className={cn(`grid grid-rows-2 h-screen bg-cover bg-center bg-header `)}
    >
      <MenuHeader
        organizationLogo={organizationLogo}
        urlNewOrder={urlNewOrder}
        lbImpact={t("impact")}
        lbAboutProject={t("aboutProject")}
        lbNewOrder={t("newOrder")}
      />
      <div className="mt-50">
        <div className="justify-items-center text-center text-white mx-2 h-fit">
          <span className={cn(`text-8xl `, fontSizeTitle)}>{t("yourOrdersGo")}</span>
          <br />
          <span className={cn(`text-8xl font-extrabold `, fontSizeTitle)}>
            {t("packagesComeBack")}
          </span>
          <br />
          <p className={cn(`mt-8 font-bold text-2xl `, fontSizeSubtitle)}>{t("discoverImpact")}</p>
        </div>
        <div className="justify-items-center text-center text-white self-end my-10 w-full mt-60">
          <span className={organizationVideo ? "" : "hidden"}>
            <Dialog>
              <DialogHeader>
                <DialogTitle />
              </DialogHeader>
              <DialogTrigger asChild>
                <Button className="bg-black size-sm text-white mt-1 text-base w-2xs">
                  <Play className="fill-white mr-2" size={"15"} />
                  {t("viewVideo")}
                  <Play
                    className="invisible w-1 pointer-events-none"
                    size={"15"}
                  />
                </Button>
              </DialogTrigger>
              <DialogOverlay>
                <DialogContent>
                  <YouTubeEmbed
                    videoid={organizationVideo}
                    style="display: contents"
                  />
                </DialogContent>
              </DialogOverlay>
            </Dialog>
          </span>
          <Link href="#contribution-section">
            <Button className="bg-black ml-2 size-sm mt-1 text-base">
              <Play className="invisible w-1 pointer-events-none" size={"15"} />
              {t("viewImpact")}
              <Play className="invisible w-1 pointer-events-none" size={"15"} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
