"use server";

export async function getInfoLandingByUser(
  userId: string,
  organization: string
) {
  const dataInit = {
    organization: { name: "", logo: "", orderUrl: "", webSite: "", logoSecond: "" },
    partners: [],
    started_at: new Date(),
    contributionOrganization: {
      numberLt: 0,
      numberKg: 0,
      numberAssets: 0,
      numberCarbon: 0,
    },
    contributionUser: {
      numberLt: 0,
      numberKg: 0,
      numberAssets: 0,
      numberCarbon: 0,
    },
    top: 0,
  };
  try {
    const apiKey = process.env[`${organization.toUpperCase()}_API_KEY`];
    const url = `${process.env.XICLO_API_URL}/users/landing?user_reference=${userId}`;
    
    const res = await fetch(url, {
      headers: {
        "X-Api-Key": `${apiKey}`,
      },
    });

    const data = await res.json();

    if (data.statusCode && data.statusCode != 200) {
      return dataInit;
    }
    return data;
  } catch (err) {
    console.error(err);
    return dataInit;
  }
}
