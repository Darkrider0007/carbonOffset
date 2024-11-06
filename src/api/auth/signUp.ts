import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function signup(data: any): Promise<any> {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/create-user`, data);
    return { data: res.data.data, status: res.status };
  } catch (error: any) {
    console.error("Error signing up:", error);
    return error.response.data;
  }
}

export async function verifyEmail(data: any): Promise<any> {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/verify-email`, data);
    return { data: res.data.message, status: res.status };
  } catch (error: any) {
    console.error("Error verifying email:", error);
    return error.response.data;
  }
}
