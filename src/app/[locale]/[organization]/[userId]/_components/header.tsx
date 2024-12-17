import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { constant } from "@/constants";
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Play } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import MenuHeader from "./menu-header";

const Header = async ({
  organizationLogo,
  urlNewOrder,
}: {
  organizationLogo: string;
  urlNewOrder: string;
}) => {
  const t = await getTranslations("Header");
  return (
    <header
      className={cn(
        `grid grid-rows-3 h-screen bg-cover bg-center bg-header `
      )}
    >
      <MenuHeader
        organizationLogo={organizationLogo}
        urlNewOrder={urlNewOrder}
        lbImpact={t('impact')}
        lbAboutProject={t('aboutProject')}
        lbNewOrder={t('newOrder')}
      />
      <div className="justify-items-center text-center text-white my-48 mx-5">
        <span className="text-6xl">{t("yourOrdersGo")}</span>
        <br />
        <span className="text-6xl font-extrabold">{t("packagesComeBack")}</span>
        <br />
        <p className="mt-8 font-bold text-lg">{t("discoverImpact")}</p>
      </div>
      <div className="justify-items-center text-center text-white self-end absolute mb-20 w-full">
        <Dialog>
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
          <DialogTrigger asChild>
            <Button className="bg-black size-icon text-white mt-1">
              <Play className="fill-white h-3" />
              {t("viewVideo")}
            </Button>
          </DialogTrigger>
          <DialogOverlay>
            <DialogContent>
              <YouTubeEmbed
                videoid={constant.video}
                style="display: contents"
              />
            </DialogContent>
          </DialogOverlay>
        </Dialog>
        <Link href="#contribution-section">
          <Button className="bg-black ml-2 size-sm mt-1">
            {t("viewImpact")}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
