import axios from "axios";
import firebaseStorageManager from "./firebase";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function sendProposal(data: any) {
  try {
    const documentFile = data.supportingDocuments[0];

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

    const res = await axios.post(`${BASE_URL}/api/proposal/create`, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      affiliation: data.affiliation,
      proposalTitle: data.proposalTitle,
      proposalDetails: data.proposalDetails,
      focusArea: data.focusArea,
      supportingDocuments: documentUrl,
      agreePrivacy: data.agreePrivacy,
    });
    return { data: res.data, status: res.status };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

export async function getProposalData() {
  try {
    const res = await axios.get(`${BASE_URL}/api/proposal`);
    return res;
  } catch (error) {
    console.error("Error fetching proposal data:", error);
    throw error;
  }
}
