import axios from "axios";

export async function getAdminData(): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.get(`/api/dashboard`);
    console.log(res.data);

    return { data: res.data, status: res.status };
    // return { data: 1, status: 200 };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
