import { getInfoLandingByUser } from "../../../../lib/client/client";
import AboutProject from "./_components/about-project";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Impact from "./_components/impact";
import Partners from "./_components/partners";

const Home = async ({
  params,
}: {
  params: Promise<{ userId: string; organization: string }>;
}) => {
  const { organization, userId } = await params;
  const data = await getInfoLandingByUser(userId, organization);

  return (
    <main>
      <Header
        organizationLogo={data.organization.logo}
        urlNewOrder={data.organization.orderUrl}
      />
      <Impact data={data} />
      <AboutProject
        organizationLogo={data.organization.logo}
        organizationName={data.organization.name}
        urlNewOrder={data.organization.orderUrl}
      />
      <Partners partners={data.partners} />
      <Footer organizationName={data.organization.name} />
    </main>
  );
};

export default Home;
