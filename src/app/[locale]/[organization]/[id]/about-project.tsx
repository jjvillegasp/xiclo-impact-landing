import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const AboutProject = async ({
  organizationName,
  organizationLogo,
  urlNewOrder,
  className,
}: {
  organizationName: string;
  organizationLogo: string;
  urlNewOrder: string;
  className: any;
}) => {
  const t = await getTranslations("AboutProject");
  return (
    <div className="mb-20">
      <div className="margin-sc-green bg-[#97C355] w-96 h-6 rounded-t-lg"></div>
      <div
        id="about-project"
        className={cn("margin-sc p-20 text-white rounded-xl", className)}
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
            <Link
              className="w-fit items-center justify-self-end"
              href={urlNewOrder}
            >
              <Button className="bg-white text-black">
                {t("placeNewOrder")}
              </Button>
            </Link>
          </div>
          <Avatar className="w-24 h-10">
            <AvatarImage src={organizationLogo} />
          </Avatar>
          <Avatar className="w-24 h-10">
            <AvatarImage src="/assets/images/xiclo.png" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
