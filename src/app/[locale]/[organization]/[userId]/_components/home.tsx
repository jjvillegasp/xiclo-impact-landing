import { getInfoLandingByUser } from "../../../../../lib/client/client";
import AboutProject from "./about-project";
import Start from "./start";
import Impact from "./impact";
import Partners from "./partners";
import Footer from "./footer";
import CareTips from "./care-tips";
import MenuHeader from "./header";
import ImagePreloader from "./image-preloader";

const Home = async ({
  userId,
  organization,
}: {
  userId: string;
  organization: string;
}) => {
  const data = await getInfoLandingByUser(userId, organization);
  const toTitleCase = (phrase: string) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <ImagePreloader />
        <title className="capitalize">{`${toTitleCase(
          organization
        )} + Xiclo`}</title>
          <MenuHeader
            organizationLogo={data.organization.logo}
            urlNewOrder={data.organization.orderUrl}
            webSite={data.organization.webSite}
            organizationLogoSecond={data.organization.logoSecond}
          />

        <main>
          <Start
            organizationVideo={data.organization.video}
          />
          <div className="mx-10">
            <AboutProject
              organizationLogo={data.organization.logo}
              organizationName={data.organization.name}
              urlNewOrder={data.organization.orderUrl}
            />
            <Impact data={data} />
            <Partners partners={data.partners} />
            <CareTips />
          </div>
          <Footer organizationName={data.organization.name} />
        </main>
    </>
  );
};

export default Home;
