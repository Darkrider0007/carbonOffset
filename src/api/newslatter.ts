import axios from "axios";

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://carbonoffset-backend-c733.onrender.com";

export async function subscribeNewsletter(
  data: any
): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.post(`${BASE_URL}/api/newsletter/subscribe`, data);

    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function getNewsletter(): Promise<{
  data: any;
  status: number;
  count: any;
}> {
  try {
    const res = await axios.get(`${BASE_URL}/api/newsletter/getAllSubscribers`);

    return { data: res.data, status: res.status, count: res.data.count };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}