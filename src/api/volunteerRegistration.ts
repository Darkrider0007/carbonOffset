import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postVolunteerRegistration(data: any) {
  try {
    const res = await axios.post(`${BASE_URL}/api/volunteerRegistration`, data);
    return { data: res.data.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
