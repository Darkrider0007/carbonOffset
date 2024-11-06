import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function addNewProject(
  project: any
): Promise<{ data: any; status: number }> {
  try {
    const res = await axios.post(`${BASE_URL}/api/add-project`, project, {
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
    const res = await axios.get(`${BASE_URL}/api/add-project`);
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
    const res = await axios.delete(`${BASE_URL}/api/add-project/${id}`);
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
