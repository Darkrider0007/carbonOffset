import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postCollaborativeParticipation(data: any) {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/collaborativeParticipation`,
      data
    );
    return { data: res.data.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
export async function getCollaborativeParticipationData() {
  try {
    const res = await axios.get(`${BASE_URL}/api/collaborativeParticipation`);
    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}
