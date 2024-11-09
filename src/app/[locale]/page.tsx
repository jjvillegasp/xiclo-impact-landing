import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardNumber } from "@/components/ui/card_number";
import { CardTip } from "@/components/ui/card_tip";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
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

async function Impact({ organizationName }: { organizationName: string }) {
  const t = await getTranslations("Impact");
  return (
    <div className="p-20">
      <div className="grid" id="contribution-section">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl font-bold mt-100">
            {t("contributionNumbers")}
          </p>
          <p>{t("currentData")}</p>
          <div className="flex gap-4 items-center flex-col sm:flex-row my-10 h-fit">
            <Button
              variant="link"
              className="font-semibold text-1xl underline decoration-[#97C355]"
            >
              {t("organizationFootprint", { organization: organizationName })}
            </Button>
            <Button
              variant="link"
              className="font-semibold text-1xl text-[#C4C4C4] hover:underline decoration-[#97C355]"
            >
              {t("individualFootprint")}
            </Button>
          </div>
        </div>
        <div className="flex items-center">
          <ChevronLeft className="text-white" />
          <CardNumber
            number="160.400"
            label={`${t("waterSaved")}`}
            className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/sea-turtle.png)]"
          />
          <CardNumber
            number="30.400"
            label={`${t("wasteSaved")}`}
            className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/waste-paper.png)]"
          />
          <CardNumber
            number="3.200"
            label={`${t("packagingSaved")}`}
            className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/asset-save.png)]"
          />
          <ChevronRight className="text-white" />
        </div>
        <div className="flex items-center justify-center h-20">
          <ChevronDown color="#97C355" />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-11 p-8 text-center rounded-lg bg-white text-black h-auto items-center">
        <div>
          <CardTip icon="icon.png" label={t("tipOne")} />
          <CardTip icon="icon2.png" label={t("tipTwo")} />
          <CardTip
            icon="icon3.png"
            label={t("tipThree")}
            className="font-bold"
          />
        </div>
        <div className="mx-10">
          <div className="flex items-center gap-8">
            <p className="font-extrabold text-4xl text-left flex-1">
              {t("tipsOf")} <br /> {t("care")}
            </p>
            <Avatar className="w-24 h-16 gap-4">
              <AvatarImage src="/assets.png" />
            </Avatar>
          </div>
          <div className="my-5 text-justify">
            <p>
              {t("designAssets")}
              <span className="font-bold">{t("washingProcess")}</span>
            </p>
            <br />
            <p>
              <span className="font-bold">{t("remember")}</span>{" "}
              {t("careAssets")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header organizationLogo="logoTakami.png" />
      <Impact organizationName="Takami"/>
    </main>
  );
}
