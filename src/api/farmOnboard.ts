import axios, { AxiosResponse } from "axios";
import firebaseStorageManager from "./firebase";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createFarmOnboard(
  data: any
): Promise<{ data: any; status: number }> {
  try {
    const documentFile = data.document[0];

    if (!documentFile || !(documentFile instanceof File)) {
      throw new Error("Invalid document file provided.");
    }

    const uploadResult = await firebaseStorageManager.uploadFile(
      documentFile,
      `documents/${documentFile.name}`
    );

    const documentUrl = `https://firebasestorage.googleapis.com/v0/b/${
      uploadResult.metadata.bucket
    }/o/${encodeURIComponent(uploadResult.metadata.fullPath)}?alt=media`;

    const formData = {
      email: data.email,
      name: data.name,
      phone: data.phone,
      organization: data.organization,
      address: data.address,
      area: data.area,
      coordinates: data.coordinates,
      vegetationType: data.vegetationType,
      document: documentUrl,
    };

    const res = await axios.post(
      `${BASE_URL}/api/farmOnboard/create-farm-onboarding`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function getFarmOnboard(): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/farmOnboard/get-all-farm-onboarding`
    );

    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

// Define the expected structure of the response data
interface UpdateResponse {
  message: string;
  status: number;
}

// Update function with TypeScript typing for parameters and return type
export async function updateFarmOnboardApproval(
  id: string,
  status: boolean
): Promise<UpdateResponse> {
  try {
    // Making a POST request to the server
    const response: AxiosResponse<UpdateResponse> = await axios.put(
      `${BASE_URL}/api/farmOnboard/update-farm-onboarding-status`,
      {
        id,
        status,
      }
    );

    // Return the response data from the server
    return { message: response.data.message, status: response.status };
  } catch (error) {
    // Log and throw the error for handling by the caller function
    console.error("Error updating farm onboarding status:", error);
    throw error;
  }
}

export async function deleteFarmOnboard(
  id: string
): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.delete(
      `${BASE_URL}/api/farmOnboard/delete-farm-onboarding/${id}`
    );

    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error deleting farm onboarding:", error);
    throw error;
  }
}
