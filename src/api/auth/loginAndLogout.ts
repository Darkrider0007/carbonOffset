import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function login(loginData: {
  email: string;
  password: string;
}): Promise<any> {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/login`, {
      email: loginData.email,
      password: loginData.password,
    });

    // Store the access token in a cookie
    Cookies.set("accessToken", response.data.accessToken, {
      expires: 15,
      secure: true,
      sameSite: "Strict",
      path: "/",
    });

    return { data: response.data, status: response.status };
  } catch (error: any) {
    console.error("Error during login:", error);

    if (error.response) {
      throw {
        message: error.response.data.message || "Error during login",
        status: error.response.status,
      };
    } else if (error.request) {
      throw {
        message: "Network error: No response received from server",
        status: 500,
      };
    } else {
      throw { message: error.message || "Unknown error occurred", status: 500 };
    }
  }
}

export async function logout(): Promise<any> {
  try {
    const token = Cookies.get("accessToken");

    const resposnse = await axios.post(
      `${BASE_URL}/api/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Cookies.remove("accessToken");
    return {
      data: resposnse.data,
      status: resposnse.status,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function adminLogin(loginData: {
  email: string;
  password: string;
}): Promise<any> {
  try {
    const response = await axios.post(`${BASE_URL}/api/admin/admin-login`, {
      email: loginData.email,
      password: loginData.password,
    });

    // Store the access token in a cookie
    Cookies.set("adminToken", response.data.token, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
      path: "/",
    });

    return { data: response.data, status: response.status };
  } catch (error: any) {
    console.error("Error during login:", error);

    if (error.response) {
      throw {
        message: error.response.data.message || "Error during login",
        status: error.response.status,
      };
    } else if (error.request) {
      throw {
        message: "Network error: No response received from server",
        status: 500,
      };
    } else {
      throw { message: error.message || "Unknown error occurred", status: 500 };
    }
  }
}
