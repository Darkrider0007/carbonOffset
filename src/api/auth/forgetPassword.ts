import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function sendMailForForgetPassword({ email }: any): Promise<any> {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/sendmail-forgetpassword`,
      {
        email,
      }
    );
    return { data: response.data.data, status: response.status };
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

export async function resetPassword({ id, otp, password }: any): Promise<any> {
  try {
    const response = await axios.put(`${BASE_URL}/api/user/update-password`, {
      id,
      otp,
      newPassword: password,
    });

    return { message: response.data.message, status: response.status };
  } catch (error: any) {
    throw error.response.data;
  }
}
