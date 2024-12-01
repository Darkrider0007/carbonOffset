import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function calculate(
  data: any
): Promise<{ data: any; status: number }> {
  try {
    const token = Cookies.get("accessToken");
    const res = await axios.post(
      `${BASE_URL}/api/calculate-individual/create-individual-emissions`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
