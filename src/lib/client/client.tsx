"use server";

export async function getInfoLandingByUser(id: string, organization: string) {
  const dataInit = { organization: { name: "", logo: "", orderUrl: "" }, partners: [], started_at: new Date(), numberLt: 0, numberKg: 0, numberAssets: 0, top: 0 };
  try {
    const apiKey = process.env[`${organization.toUpperCase()}_API_KEY`];
    const res = await fetch(`${process.env.XICLO_API_URL}/users/landing/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await res.json();
    if (data.statusCode && data.statusCode != 200) {
      return dataInit;
    }
    return data
  } catch (err) {
    return dataInit;
  }
}
