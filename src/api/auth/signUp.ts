import axios from "axios";

const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";
// const BASE_URL = "http://localhost:8080";

export async function signup(data: any): Promise<any> {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/create-user`, data);
    console.log(res);
    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error signing up:", error);
    return error.response.data;
  }
}
