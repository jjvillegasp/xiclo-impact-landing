"use client";

import { Button } from "@/components/ui/button";
import { CardNumber } from "@/components/ui/card-number";
import { useBrowserDetection } from "@/hooks/use-browser-detection";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";

type ImpactProps = {
  data: {
    started_at: string;
    user?: string;
    organization: { name: string };
    top: number;
    contributionOrganization: {
      numberWaterUsageLt: number;
      numberLandfillKg: number;
      numberAssets: number;
      numberCarbonKg: number;
    };
    contributionUser: {
      numberWaterUsageLt: number;
      numberLandfillKg: number;
      numberAssets: number;
      numberCarbonKg: number;
    };
  };
};

const Impact = ({ data }: ImpactProps) => {
  const t = useTranslations("Impact"); // Sync translation hook
  const startedAt = new Date(data.started_at);
  const formatDate = `${startedAt.getDate().toString().padStart(2, "0")}/${(
    startedAt.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${startedAt.getFullYear()}`;

  const [dataUser, setDataUser] = useState("individual");
  const { isSafari, isSmallScreen } = useBrowserDetection();
  const gridInfoUser = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : "grid-cols-2"
    : "grid-cols-1";
  const gridCards = isSafari
    ? isSmallScreen
      ? "grid-cols-1"
      : "grid-cols-4"
    : "grid-cols-1";

  const onSubmit = (value: string) => {
    setDataUser(value);
  };

  const InfoUser = () => {
    if (data.user != undefined && dataUser === "individual") {
      return (
        <div
          className={cn(
            `grid md:grid-cols-2 text-black h-auto items-center gap-4 mb-4 text-sm `,
            gridInfoUser
          )}
        >
          <div>
            <p className="flex-1 text-3xl font-bold">{data.user}</p>
            <p className="text-[#B8B8B8] text-lg">
              {t("startedAt")}
              <span className="font-bold">{formatDate}</span>
            </p>
          </div>
          <div>
            <p className="text-xl">
              {t.rich("usersFootprint", {
                top: data.top,
                b: (data) => <span className="font-bold">{data}</span>,
              })}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center mb-5">
        <p className="text-2xl center">
          {t("reducingConsumption")}
          <span className="font-bold">{t("togetherSaved")}</span>
        </p>
      </div>
    );
  };

  const Menu = () => {
    if (data.user != undefined) {
      return (
        <div className="grid grid-cols-2 items-center my-10">
          <Button
            variant="link"
            onClick={() => onSubmit("organization")}
            className={cn(
              "font-semibold text-1xl decoration-[#97C355] justify-end ",
              dataUser === "organization"
                ? "hover:underline underline"
                : "text-[#5C5A5A]"
            )}
            type="submit"
          >
            <Link href={""}>
              {t("organizationFootprint", {
                organization: data.organization.name,
              })}
            </Link>
          </Button>
          <Button
            variant="link"
            onClick={() => onSubmit("individual")}
            className={cn(
              "font-semibold text-1xl decoration-[#97C355] justify-start ",
              dataUser === "individual"
                ? "hover:underline underline"
                : "text-[#5C5A5A]"
            )}
            type="submit"
          >
            <Link href={""}>{t("individualFootprint")} </Link>
          </Button>
        </div>
      );
    }

    return <span className="my-5"></span>;
  };

  return (
    <div id="contribution-section" className="scroll-mt-32 container mx-auto">
      <div className="grid">
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-bold text-center">
            {t("contributionNumbers")}
          </p>
          <p className="text-2xl text-center">{t("currentData")}</p>
        </div>
        {Menu()}
        <div className="bg-white p-10 rounded-lg">
          {InfoUser()}
          <div
            className={cn(`grid md:grid-cols-4 items-center gap-4 `, gridCards)}
          >
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberWaterUsageLt
                  : data.contributionOrganization.numberWaterUsageLt
              }
              label={t("waterSaved")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/closeup-blue-sea-surface.jpg)] bg-cover bg-center"
            />
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberLandfillKg
                  : data.contributionOrganization.numberLandfillKg
              }
              label={t("wasteSaved")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/sides-stacks-cardboard-folded.jpg)] bg-cover bg-center"
            />
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberAssets
                  : data.contributionOrganization.numberAssets
              }
              label={t("packagingSaved")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/asset-save.jpg)] bg-cover bg-center"
            />
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberCarbonKg
                  : data.contributionOrganization.numberCarbonKg
              }
              label={t("carbonFootprintSave")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/pexels.png)] bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
