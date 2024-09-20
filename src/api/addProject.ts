import axios from "axios";

const BASE_URL = "https://carbonoffset-backend-c733.onrender.com/api";
// const BASE_URL = "http://localhost:8080/api"; // No trailing slash

export async function addNewProject(
  project: any
): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.post(`${BASE_URL}/add-project`, project, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { data: res.data, status: res.status };
    // return { data: 1, status: 200 };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function getProjects(): Promise<any> {
  try {
    const res = await axios.get(`${BASE_URL}/add-project`);
    // console.log("res", res);
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching projects:",
      (error as any).response
        ? (error as any).response.data
        : (error as any).message
    );
    throw error;
  }
}

export async function deleteProject({ id }: any): Promise<any> {
  try {
    const res = await axios.delete(`${BASE_URL}/add-project/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching projects:",
      (error as any).response
        ? (error as any).response.data
        : (error as any).message
    );
    throw error;
  }
}
