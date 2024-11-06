import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function verifyAdmin(): Promise<any> {
  try {
    const token = Cookies.get("adminToken");

    if (!token) {
      return { message: "No token found" };
    }

    const res = await axios.get(`${BASE_URL}/api/admin/verify-admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error during login:", error);

    if (error.response) {
      throw {
        message: error.response.data.message || "Error during verification",
        status: error.response.status,
      };
    } else if (error.request) {
      throw {
        message: "Network error: No response received from server",
        status: 500,
      };
    } else {
      throw { message: error.message || "Unknown error occurred", status: 500 };
    }
  }
}
