import axios from "axios";

export async function getUser(): Promise<any> {
  try {
    const res = await axios.get("/api/user/get-user", {
      withCredentials: true, // Ensures cookies are sent with the request
    });

    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return error.response?.data || { message: "Unknown error occurred" };
  }
}

export async function refreshToken(): Promise<any> {
  try {
    const res = await axios.get("/api/user/refresh-token", {
      withCredentials: true, // Ensures cookies are sent with the request
    });

    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return error.response?.data || { message: "Unknown error occurred" };
  }
}
