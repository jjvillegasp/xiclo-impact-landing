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
import { useBrowserDetection } from "@/hooks/use-browser-detection";

const Start = ({ organizationVideo }: { organizationVideo: string }) => {
  const t = useTranslations("Header");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const fontSizeSubtitle = isSafari && isSmallScreen ? "text-base" : "";
  const fontSizeTitle = isSafari && isSmallScreen ? "text-6xl" : "";

  return (
    <div
      className={cn(
        `content-center h-screen bg-header bg-cover h-screen bg-no-repeat bg-center`
      )}
    >
      <div className="justify-items-center text-center text-white mx-2">
        <span className={cn(`text-8xl `, fontSizeTitle)}>
          {t("yourOrdersGo")}
        </span>
        <br className="text-hidden" />
        <span className={cn(`text-8xl `, fontSizeTitle)}>
          {t("packagesComeBack")}
        </span>
        <br />
        <p className={cn(`mt-8 font-bold text-2xl `, fontSizeSubtitle)}>
          {t("discoverImpact")}
        </p>
      </div>
      <div className="justify-items-center text-center text-white self-end w-full mt-20">
        <span className={organizationVideo ? "" : "hidden"}>
          <Dialog>
            <DialogHeader>
              <DialogTitle />
            </DialogHeader>
            <DialogTrigger asChild>
              <Button className="bg-white w-auto text-base hover:bg-white text-black text-xl font-extrabold mr-5">
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
        <Button className="bg-white w-auto text-base hover:bg-white text-black text-xl font-extrabold">
          <Link href="#contribution-section">
            <Play className="invisible w-1 pointer-events-none" size={"15"} />
            {t("viewImpact")}
            <Play
              className="invisible w-1 pointer-events-none"
              size={"15"}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Start;
