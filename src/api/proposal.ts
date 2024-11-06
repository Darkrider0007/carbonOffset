import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function sendPropsal(data: any) {
  try {
    const res = await axios.post(`${BASE_URL}/api/proposal/create`, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      proposalDetails: data.proposalDetails,
      isNeedFund: data.needFunds,
    });
    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
