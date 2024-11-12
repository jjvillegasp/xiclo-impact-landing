import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardNumber } from "@/components/ui/card-number";
import { CardTip } from "@/components/ui/card-tip";
import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function Impact({ data }: { data: any }) {
  const startedAt = new Date(data.started_at);
  const formatDate = `${startedAt.getDate().toString().padStart(2, "0")}/${(
    startedAt.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${startedAt.getFullYear()}`;
  const t = await getTranslations("Impact");

  return (
    <div id="contribution-section" className="padding-sc py-20">
      <div className="grid">
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-5xl font-bold mt-100">
            {t("contributionNumbers")}
          </p>
          <p>{t("currentData")}</p>
        </div>
        <div className="bg-white p-10 mx-11 rounded-lg">
          <div className="grid grid-cols-3 text-black h-auto items-center mb-5">
            <div>
              <p className="mt-100 flex-1 text-3xl font-bold">{data.user}</p>
              <p>
                {t('startedAt')} <span className="font-bold">{formatDate}</span>
              </p>
            </div>
            <span></span>
            <div>
              <p className="mt-100">{t('ranking')}  {data.organization.name}:</p>
              <p>
                <span className="text-3xl font-bold">{t('top')}  {data.top}</span> {t('usersFootprint')} 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <CardNumber
              number={data.numberLt}
              label={`${t("waterSaved")}`}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/sea-turtle.png)]"
            />
            <CardNumber
              number={data.numberKg}
              label={`${t("wasteSaved")}`}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/waste-paper.png)]"
            />
            <CardNumber
              number={data.numberAssets}
              label={`${t("packagingSaved")}`}
              className="bg-[linear-gradient(to_top,rgba(3,3,3,0),rgba(0,0,0,0.7)),url(/assets/images/asset-save.png)]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-20">
          <ChevronDown color="#97C355" />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-11 p-8 text-center rounded-lg bg-white text-black h-auto items-center">
        <div>
          <CardTip icon="assets/images/laundry.png" label={t("tipOne")} />
          <CardTip icon="assets/images/soap.png" label={t("tipTwo")} />
          <CardTip
            icon="assets/images/microwave.png"
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
              <AvatarImage src="/assets/images/assets.png" />
            </Avatar>
          </div>
          <div className="my-5 text-justify">
            <p>
              {t("designAssets")}
              <span className="font-bold">{t("washingProcess")}</span>
            </p>
            <br />
            <p>
              <span className="font-bold">{t("remember")}</span>
              {t("careAssets")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
