import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
        `grid grid-rows-3 p-10 h-screen bg-cover bg-center bg-header `
      )}
    >
      <div className="grid grid-cols-3 h-fit text-white justify-items-stretch">
        <Avatar className="w-28 h-10">
          <AvatarImage src={organizationLogo} />
        </Avatar>
        <div className="flex justify-center gap-8">
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white"
          >
            <Link href="#contribution-section">{t("impact")}</Link>
          </Button>
          <Button
            variant="link"
            className="text-white font-semibold hover:underline decoration-white"
          >
            <Link href="#about-project">{t("aboutProject")}</Link>
          </Button>
        </div>
        <Link
          className="w-fit items-center justify-self-end"
          href={urlNewOrder}
        >
          <Button className="bg-white text-black">{t("newOrder")}</Button>
        </Link>
      </div>
      <div className="justify-items-center text-center text-white">
        <span className="text-6xl">{t("yourOrdersGo")}</span>
        <br />
        <span className="text-7xl font-extrabold">{t("packagesComeBack")}</span>
        <br />
        <p className="mt-8 font-bold">{t("discoverImpact")}</p>
      </div>
      <div className="justify-items-center text-center text-white self-end mb-3">
        <Dialog>
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
          <DialogTrigger asChild>
            <Button className="bg-black size-icon text-white">
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
          <Button className="bg-black ml-2 size-sm">{t("viewImpact")}</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
