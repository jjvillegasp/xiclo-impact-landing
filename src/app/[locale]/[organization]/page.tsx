import Home from "./[userId]/_components/home";

const PageOrganization = async ({
  params,
}: {
  params: Promise<{ organization: string }>;
}) => {
  const { organization } = await params;

  return <Home organization={organization} userId={""} />;
};

export default PageOrganization;
