import axios from "axios";

const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";

export async function getAllPayments({ limit }: { limit: number }): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.get(`${BASE_URL}/api/create-checkout-session/listTransactions?limit=${limit}`);
    return {
      data: res.data.data,
      status: res.status,
    };
  } catch (error) {
    throw new Error(`Failed to fetch payments: ${(error as Error).message}`);
  }
}