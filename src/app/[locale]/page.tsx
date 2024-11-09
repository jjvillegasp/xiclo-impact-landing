import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Header = async ({ organizationLogo }: { organizationLogo: string }) => {
  const t = await getTranslations("Header");
  return (
    <header
      className={`object-contain grid grid-rows-3 p-10 h-screen bg-[length:100%_100%] bg-[linear-gradient(to_right_bottom,rgba(3,3,3,0.4),rgba(0,0,0,0.1)),url(/header.png)]`}
    >
      <div className="grid grid-cols-3 h-fit text-white justify-items-stretch">
        <Avatar className="w-24 h-10">
          <AvatarImage src={`/${organizationLogo}`} />
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
        <Button className="bg-white text-black w-fit items-center justify-self-end">
          {t("newOrder")}
        </Button>
      </div>
      <div className="justify-items-center text-center text-white">
        <span className="text-6xl">{t("yourOrdersGo")}</span>
        <br />
        <span className="text-7xl font-extrabold">{t("packagesComeBack")}</span>
        <br />
        <p className="mt-8 font-bold">{t("discoverImpact")}</p>
      </div>
      <div className="justify-items-center text-center text-white self-end mb-3">
        <Button className="bg-black size-icon text-white">
          <Play className="fill-white h-3" />
          {t("viewVideo")}
        </Button>
        <Button className="bg-black ml-2 size-sm">{t("viewImpact")}</Button>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <main>
      <Header organizationLogo="logoTakami.png" />
    </main>
  );
}
