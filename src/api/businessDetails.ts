import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function storeBusinessDetails(data: any) {
  try {
    const token = Cookies.get("accessToken");
    if (!token) {
      return { message: "No token found" };
    }
    const res = await axios.post(`${BASE_URL}/api/businessDetails`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function updateBusinessDetails(data: any) {
  try {
    const token = Cookies.get("accessToken");
    if (!token) {
      return { message: "No token found" };
    }
    const res = await axios.put(`${BASE_URL}/api/businessDetails`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function getBusinessDetails() {
  try {
    const token = Cookies.get("accessToken");
    if (!token) {
      return { message: "No token found" };
    }
    const res = await axios.get(`${BASE_URL}/api/businessDetails`);
    return res.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
