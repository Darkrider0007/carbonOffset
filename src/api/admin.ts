import axios from "axios";

const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";

export async function getAdminData(): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.get(`${BASE_URL}/api/dashboard`);

    return { data: res.data, status: res.status };
    // return { data: 1, status: 200 };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
