import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getUser(): Promise<any> {
  try {
    const token = Cookies.get("accessToken");
    if (!token) {
      return { message: "No token found" };
    }
    const res = await axios.get(`${BASE_URL}/api/user/get-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return error.response?.data || { message: "Unknown error occurred" };
  }
}

export async function getAllUsers(): Promise<any> {
  try {
    const res = await axios.get(`${BASE_URL}/api/user/get-all-users`);

    return { data: res.data.data, status: res.status };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return error.response?.data || { message: "Unknown error occurred" };
  }
}
