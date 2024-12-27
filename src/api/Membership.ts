import axios from "axios";
import firebaseStorageManager from "./firebase";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function sendMembership(data: any) {
  try {
    const documentFile = data?.idProof[0];

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

    let documentUrl2 = null;

    if (data?.corporateRegistration && data?.corporateRegistration.length > 0) {
      const corporateRegistration = data?.corporateRegistration[0];

      if (!corporateRegistration || !(corporateRegistration instanceof File)) {
        throw new Error("Invalid document file provided.");
      }

      const uploadResult2 = await firebaseStorageManager.uploadFile(
        corporateRegistration,
        `documents/${corporateRegistration.name}`
      );

      documentUrl2 = `https://firebasestorage.googleapis.com/v0/b/${
        uploadResult2.metadata.bucket
      }/o/${encodeURIComponent(uploadResult2.metadata.fullPath)}?alt=media`;
    }

    const res = await axios.post(`${BASE_URL}/api/membership/create`, {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      streetAddress: data.streetAddress,
      city: data.city,
      stateOrRegion: data.stateOrRegion,
      postalCode: data.postalCode,
      country: data.country,
      membershipType: data.membershipType,
      paymentMethod: data.paymentMethod,
      autoRenew: data.autoRenew,
      idProof: documentUrl,
      agreePrivacy: data.agreePrivacy,
      digitalSignatureName: data.digitalSignatureName,
      organizationName: data.organizationName,
      organizationAddress: data.organizationAddress,
      organizationPostalCode: data.organizationPostalCode,
      corporateRegistration: documentUrl2,
    });

    console.log("Membership form submitted successfully:", res.data);
    return { data: res.data, status: res.status };
  } catch (error) {
    console.log("Error adding project:", error);
    throw error;
  }
}
export async function getMembershipData() {
  try {
    const res = await axios.get(`${BASE_URL}/api/membership`);
    return res;
  } catch (error) {
    console.error("Error fetching membership data:", error);
    throw error;
  }
}
