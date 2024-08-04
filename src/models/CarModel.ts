interface ImagesCar {
  uid: string;
  name: string;
  url: string;
}

export interface CarModel {
  id?: string;
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
