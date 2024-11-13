"use server";

export async function getInfoLandingByUser(
  userId: string,
  organization: string
) {
  const dataInit = {
    organization: { name: "", logo: "", orderUrl: "" },
    partners: [],
    started_at: new Date(),
    numberLt: 0,
    numberKg: 0,
    numberAssets: 0,
    top: 0,
  };
  try {
    const apiKey = process.env[`${organization.toUpperCase()}_API_KEY`];
    const url = `${process.env.XICLO_API_URL}/users/landing/${userId}`;

    const res = await fetch(url, {
      headers: {
        "X-Api-Key": `${apiKey}`,
      },
    });

    const data = await res.json();

    console.log("data", data);
    if (data.statusCode && data.statusCode != 200) {
      return dataInit;
    }
    return data;
  } catch (err) {
    console.error(err);
    return dataInit;
  }
}
