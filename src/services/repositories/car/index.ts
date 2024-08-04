import { db } from "@/services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

interface ImagesCar {
  uid: string;
  name: string;
  url: string;
}

export interface CarProps {
  city: string;
  created: Date | string;
  description: string;
  images: ImagesCar[];
  km: string | number;
  model: string;
  name: string;
  owner: string;
  phone: string;
  price: string | number;
  userUid: string;
  year: string | number;
}

interface ICarRepository {
  create: (car: CarProps) => Promise<void>;
}

class CarRepository implements ICarRepository {
  async create(car: CarProps) {
    const ref = collection(db, "cars");

    await addDoc(ref, { ...car });
  }
}

export const CarService = new CarRepository();
