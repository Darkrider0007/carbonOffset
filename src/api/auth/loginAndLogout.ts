import axios from "axios";

// const BASE_URL = "https://carbonoffset-backend.onrender.com";
// const BASE_URL = "http://localhost:5000/api";

export async function login(data: any): Promise<any> {
  try {
    const res = await axios.post("/api/user/login", data, {
      withCredentials: true,
    });
    console.log(res);
    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error signing up:", error);
    return error.response.data;
  }
}