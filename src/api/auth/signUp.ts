import axios from "axios";

const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";
// const BASE_URL = "http://localhost:8080";

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
