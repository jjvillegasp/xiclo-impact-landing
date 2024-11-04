import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardNumber } from "@/components/ui/card_number";
import { CardTip } from "@/components/ui/card_tip";
import { Header } from "@/components/ui/header";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function Impact() {
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
              {t("organizationFootprint", { organization: "Takami" })}
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
      <Header organizationLogo="logoTakami.png" imgHeader="header.png" />
      <Impact />
    </main>
  );
}
