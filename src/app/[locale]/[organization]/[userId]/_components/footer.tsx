import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { constant } from "@/constants";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Footer = async ({ organizationName }: { organizationName: string }) => {
  const h = await getTranslations("Header");
  const t = await getTranslations("AboutProject");
  return (
    <footer className="bg-black py-14 px-36">
      <div className="flex">
        <div className="flex-1">
          <div>
            <Avatar className="h-20 w-40">
              <AvatarImage src="/assets/images/xiclo-powered.png" />
            </Avatar>
          </div>
          <Link href={constant.xicloDownload}>
            <Button className="mb-32 mt-10 bg-white text-black">
              {t("downloadXiclo")}
            </Button>
          </Link>
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

export default Footer;
