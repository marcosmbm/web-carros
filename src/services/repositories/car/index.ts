import { db } from "@/services/firebaseConnection";
import {
  addDoc,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

import type { CarModel } from "@/models";

interface ICarRepository {
  create: (car: CarModel) => Promise<void>;
  listAllCars: () => Promise<CarModel[]>;
}

class CarRepository implements ICarRepository {
  async create(car: CarModel) {
    const ref = collection(db, "cars");

    await addDoc(ref, { ...car });
  }

  async listAllCars() {
    const carsRef = collection(db, "cars");
    const queryRef = query(carsRef, orderBy("created", "desc"));

    const snapshot = await getDocs(queryRef);

    const listCars: CarModel[] = [];

    snapshot.forEach((doc) => {
      listCars.push({
        id: doc.id,
        city: doc.data().city,
        created: doc.data().created,
        description: doc.data().description,
        images: doc.data().images,
        km: doc.data().km,
        model: doc.data().model,
        name: doc.data().name,
        owner: doc.data().owner,
        phone: doc.data().phone,
        price: doc.data().price,
        userUid: doc.data().userUid,
        year: doc.data().year,
      });
    });

    return listCars;
  }
}

export const CarService = new CarRepository();
