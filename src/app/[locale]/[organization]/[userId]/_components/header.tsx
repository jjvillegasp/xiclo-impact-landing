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
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import MenuHeader from "./menu-header";

const Header = async ({
  organizationLogo,
  organizationVideo,
  urlNewOrder,
}: {
  organizationLogo: string;
  organizationVideo: string;
  urlNewOrder: string;
}) => {
  const t = await getTranslations("Header");
  return (
    <header
      className={cn(`grid grid-rows-3 h-screen bg-cover bg-center bg-header `)}
    >
      <MenuHeader
        organizationLogo={organizationLogo}
        urlNewOrder={urlNewOrder}
        lbImpact={t("impact")}
        lbAboutProject={t("aboutProject")}
        lbNewOrder={t("newOrder")}
      />
      <div className="justify-items-center text-center text-white my-48 mx-2">
        <span className="text-8xl">{t("yourOrdersGo")}</span>
        <br />
        <span className="text-8xl font-extrabold">{t("packagesComeBack")}</span>
        <br />
        <p className="mt-8 font-bold text-2xl">{t("discoverImpact")}</p>
      </div>
      <div className="justify-items-center text-center text-white self-end absolute my-10 w-full">
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
          <Button className="bg-black ml-2 size-sm mt-1 text-base w-2xs">
            <Play className="invisible w-1 pointer-events-none" size={"15"} />
            {t("viewImpact")}
            <Play className="invisible w-1 pointer-events-none" size={"15"} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
