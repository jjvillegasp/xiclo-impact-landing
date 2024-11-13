import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardNumber } from "@/components/ui/card-number";
import { CardPartner } from "@/components/ui/card-partner";
import { CardTip } from "@/components/ui/card-tip";
import { ChevronDown, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = ({ organizationLogo }: { organizationLogo: string }) => {
  const t = useTranslations("Header");
  return (
    <header
      className={`grid grid-rows-3 p-10 h-screen bg-[url(/header.png)] bg-cover`}
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

function Impact({ organizationName }: { organizationName: string }) {
  const t = useTranslations("Impact");
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
            className="bg-[url(/sea-turtle.png)] bg-cover"
          />
          <CardNumber
            number="30.400"
            label={`${t("wasteSaved")}`}
            className="bg-[url(/waste-paper.png)] bg-cover"
          />
          <CardNumber
            number="3.200"
            label={`${t("packagingSaved")}`}
            className="bg-[url(/asset-save.png)] bg-cover"
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

const AboutProject = ({
  organizationName,
  organizationLogo,
}: {
  organizationName: string;
  organizationLogo: string;
}) => {
  const t = useTranslations("AboutProject");
  return (
    <div>
      <div className="mx-40 bg-[#97C355] w-96 h-6 rounded-t-lg"></div>
      <div
        className="mx-32 p-20 text-white rounded-xl bg-[linear-gradient(to_left,rgba(3,3,3,0.3),rgba(0,0,0,0.7)),url(/img.png)] bg-cover"
        id="about-project"
      >
        <p className="font-semibold text-xl">
          {t("wasteFreeOrders")}
          <br />
          {t("flavorWithoutLimits")}
        </p>
        <br />
        <p className="font-extrabold text-8xl">
          {organizationName} <br /> {t("moreXiclo")}
        </p>
        <br />
        <div className="text-lg w-[500px] text-left">
          <p>
            {organizationName} {t("joinXiclo")}
          </p>
          <br />
          <p>{t("enjoyDishes")}</p>
        </div>
        <div className="flex items-center mt-20 gap-12">
          <div className="flex-1 justify-center">
            <Button className="bg-white text-black">
              {t("placeNewOrder")}
            </Button>
          </div>
          <Avatar className="w-24 h-10">
            <AvatarImage src={`/${organizationLogo}`} />
          </Avatar>
          <Avatar className="w-24 h-10">
            <AvatarImage src="/xicloIcon.png" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const t = useTranslations("Partner");
  return (
    <div className="mx-32 mt-10 mb-40">
      <p className="text-lg">
        {t("nowReturn")} <span className="font-extrabold">{t("easier")}</span>
        <br /> <span className="font-extrabold">{t("moreEfficient")}</span>
      </p>
      <br />
      <p className="text-5xl text-[#97C355]">
        {t("startTo")}{" "}
        <span className="font-extrabold">{t("reduceFootprint")}</span>{" "}
        {t("today")}
      </p>
      <p className="mt-5 text-lg">{t("ordersReturnable")}</p>
      <br />
      <div className="flex gap-4">
        <CardPartner className="bg-[url(/osaki.png)]" />
        <CardPartner className="bg-[url(/cacio&pepe.png)]" />
        <CardPartner className="bg-[url(/bat.png)]" />
        <CardPartner className="bg-[url(/bueno.png)]" />
      </div>
    </div>
  );
};

const Footer = ({ organizationName }: { organizationName: string }) => {
  const h = useTranslations("Header");
  const t = useTranslations("AboutProject");
  return (
    <footer className="bg-black py-14 px-32">
      <div className="flex">
        <div className="flex-1">
          <Avatar className="w-40 h-20">
            <AvatarImage src="/xiclo.png" />
          </Avatar>
          <Button className="mb-32 mt-10 bg-white text-black">
            {t("downloadXiclo")}
          </Button>
        </div>
        <div className="text-white text-justify w-1/4">
          <p>
            {organizationName} {t("joinXiclo")}
          </p>
          <br />
          <p>{t("enjoyDishes")}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          variant="link"
          className="text-white font-semibold hover:underline decoration-white text-base"
        >
          <Link href="#contribution-section">{h("impact")}</Link>
        </Button>
        <Button
          variant="link"
          className="text-white font-semibold hover:underline decoration-white text-base"
        >
          <Link href="#about-project">{h("aboutProject")}</Link>
        </Button>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <Header organizationLogo="logoTakami.png" />
      <main>
        <Impact organizationName="Takami" />
        <AboutProject
          organizationLogo="logoTakami.png"
          organizationName="Takami"
        />
        <Partners />
        <Footer organizationName="Takami" />
      </main>
    </>
  );
}
