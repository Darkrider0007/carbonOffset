import axios from "axios";

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";

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
