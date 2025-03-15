"use client";

import { Button } from "@/components/ui/button";
import { CardNumber } from "@/components/ui/card-number";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

type ImpactProps = {
  data: {
    started_at: string;
    user?: string;
    organization: { name: string };
    top: number;
    contributionOrganization: {
      numberLt: number;
      numberKg: number;
      numberAssets: number;
      numberCarbon: number;
    };
    contributionUser: {
      numberLt: number;
      numberKg: number;
      numberAssets: number;
      numberCarbon: number;
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

  const onSubmit = (value: string) => {
    setDataUser(value);
  };

  const InfoUser = () => {
    if (data.user != undefined) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-black h-auto items-center gap-4 mb-4 text-sm">
          <div>
            <p className="mt-100 flex-1 text-3xl font-bold">{data.user}</p>
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
                : "text-[#C4C4C4]"
            )}
            type="submit"
          >
            {t("organizationFootprint", {
              organization: data.organization.name,
            })}
          </Button>
          <Button
            variant="link"
            onClick={() => onSubmit("individual")}
            className={cn(
              "font-semibold text-1xl decoration-[#97C355] justify-start ",
              dataUser === "individual"
                ? "hover:underline underline"
                : "text-[#C4C4C4]"
            )}
            type="submit"
          >
            {t("individualFootprint")}
          </Button>
        </div>
      );
    }

    return <span className="my-5"></span>;
  };

  return (
    <div id="contribution-section" className="container mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberLt
                  : data.contributionOrganization.numberLt
              }
              label={t("waterSaved")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/closeup-blue-sea-surface.jpg)] bg-cover bg-center"
            />
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberKg
                  : data.contributionOrganization.numberKg
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
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/asset-save.png)] bg-cover bg-center"
            />
            <CardNumber
              number={
                dataUser === "individual" && data.user != undefined
                  ? data.contributionUser.numberCarbon
                  : data.contributionOrganization.numberCarbon
              }
              label={t("carbonFootprintSave")}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/pexels.png)] bg-cover bg-center"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-20">
          <ChevronDown color="#97C355" />
        </div>
      </div>
    </div>
  );
};

export default Impact;
