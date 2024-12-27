import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postVolunteerRegistration(data: any) {
  try {
    const res = await axios.post(`${BASE_URL}/api/volunteerRegistration`, data);
    return { data: res.data.data, status: res.status };
  } catch (error) {
    console.error("Error adding volunteer:", error);
    throw error;
  }
}

export async function getVolunteerRegistrationData() {
  try {
    const res = await axios.get(`${BASE_URL}/api/volunteerRegistration`);
    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error fetching volunteer data:", error);
    throw error;
  }
}
