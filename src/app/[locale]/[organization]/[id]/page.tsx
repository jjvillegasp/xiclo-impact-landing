import React from "react";
import Header from "./header";
import Impact from "./impact";
import AboutProject from "./about-project";
import Footer from "./footer";
import Partners from "./partners";
import { getInfoLandingByUser } from "../../../../lib/client/client";

const Home = async ({ params }: any) => {
  const organizationData = await getParams(await params);

  const data = await getInfoLandingByUser(
    organizationData.userId,
    organizationData.organization
  );
  return (
    <main>
      <Header
        organizationLogo={data.organization.logo}
        urlNewOrder={data.organization.orderUrl}
        className="bg-[linear-gradient(to_right_bottom,rgba(3,3,3,0.4),rgba(0,0,0,0.1)),url(/assets/images/header.png)]"
      />
      <Impact data={data} />
      <AboutProject
        organizationLogo={data.organization.logo}
        organizationName={data.organization.name}
        urlNewOrder={data.organization.orderUrl}
        className="bg-[linear-gradient(to_left,rgba(3,3,3,0.3),rgba(0,0,0,0.7)),url(/assets/images/xiclo-food.png)] bg-[length:100%_100%]"
      />
      <Partners partners={data.partners} />
      <Footer organizationName={data.organization.name} />
    </main>
  );
};

async function getParams(params: any) {
  return {
    userId: params.id,
    organization: params.organization,
  };
}

export default Home;
