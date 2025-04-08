import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const AboutProject = async ({
  organizationName,
  urlNewOrder,
}: {
  organizationName: string;
  organizationLogo: string;
  urlNewOrder: string;
}) => {
  const t = await getTranslations("AboutProject");
  
  return (
    <div className="container mx-auto max-h-screen bg-cover my-10 h-fit">
      <div className="ml-11 bg-[#97C355] w-1/2 h-6 rounded-t-lg"></div>
      <div
        id="about-project"
        className={"margin-sc p-7 text-white rounded-xl bg-impact bg-cover"}
      >
        <p className="font-semibold text-xl">{t("goodbyePacking")}</p>
        <br />
        <p className="font-extrabold text-8xl">
          {organizationName} <br /> {t("moreXiclo")}
        </p>
        <br />
        <div className="text-lg text-left">
          <p>{t("joinXiclo")}</p>
          <br />
          <p>{t("enjoyDishes")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20 gap-12 customer-center">
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
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
