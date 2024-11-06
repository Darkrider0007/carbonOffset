import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllPayments({
  limit,
}: {
  limit: number;
}): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/create-checkout-session/listTransactions?limit=${limit}`
    );
    return {
      data: res.data.data,
      status: res.status,
    };
  } catch (error) {
    throw new Error(`Failed to fetch payments: ${(error as Error).message}`);
  }
}
