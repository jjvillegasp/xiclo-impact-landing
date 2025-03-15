import Home from "./_components/home";

const PageUser = async ({
  params,
}: {
  params: Promise<{ organization: string; userId: string }>;
}) => {
  const { organization, userId } = await params;

  return <Home organization={organization} userId={userId} />;
};

export default PageUser;
