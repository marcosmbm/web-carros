import { storage } from "@/services/firebaseConnection";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export interface ImageItemProps {
  uid: string;
  name: string;
  previewUrl: string;
  url: string;
}

export async function onUploadImage(image: File, path: string) {
  const uploadRef = ref(storage, path);
  const snapshot = await uploadBytes(uploadRef, image);

  const downloadUrl = await getDownloadURL(snapshot.ref);

  return downloadUrl;
}

export async function onDeleteImage(path: string) {
  const imagePath = path;
  const imageRef = ref(storage, imagePath);
  await deleteObject(imageRef);
}
