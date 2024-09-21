import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, UploadResult } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Firebase Storage Manager Class
class FirebaseStorageManager {
  private app;
  private storage;

  constructor(config: object) {
    this.app = initializeApp(config);
    this.storage = getStorage(this.app);
  }

  // Upload file method
  async uploadFile(file: File, path: string): Promise<UploadResult> {
    try {
      const fileRef = ref(this.storage, path);
      const snapshot = await uploadBytes(fileRef, file);
      console.log(`Uploaded file at ${snapshot.metadata.fullPath}`);
      return snapshot;
    } catch (error) {
      console.error("File upload error:", error);
      throw error;
    }
  }

  // Other storage-related methods can be added here
}

// Create an instance of the FirebaseStorageManager
export const firebaseStorageManager = new FirebaseStorageManager(
  firebaseConfig
);

export default firebaseStorageManager;
