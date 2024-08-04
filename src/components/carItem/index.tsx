import { useState } from "react";

import type { CarModel } from "@/models";

import { Link } from "react-router-dom";

interface CarItemProps {
  car: CarModel;
}

export function CarItem({ car }: CarItemProps) {
  const [loadImages, setLoadImages] = useState<string[]>([]);

  function handleImageLoad(id: string) {
    setLoadImages((prevImageLoaded) => [...prevImageLoaded, id]);
  }

  return (
    <Link to={`/car/${car.id}`}>
      <section className="w-full bg-white rounded-lg">
        <div
          className="w-full h-72 rounded-lg bg-slate-200"
          style={{
            display: loadImages.includes(car.id as string) ? "none" : "block",
          }}
        />

        <img
          src={car.images[0].url}
          alt={car.name}
          className="w-full rounded-lg mb-2 max-h-72 object-cover cursor-pointer hover:scale-105 duration-300"
          onLoad={() => handleImageLoad(car.id as string)}
          style={{
            display: loadImages.includes(car.id as string) ? "block" : "none",
          }}
        />

        <p className="font-bold mt-1 mb-2 px-2 text-base">{car.name}</p>

        <div className="flex flex-col px-2">
          <span className="text-zinc-700 mb-6">
            Ano {car.year} | {car.km} km
          </span>
          <strong className="text-xl font-medium">{car.price}</strong>
        </div>

        <hr className="my-2 bg-slate-200" />

        <div className="px-2 pb-2">
          <span className="text-zinc-700">{car.city}</span>
        </div>
      </section>
    </Link>
  );
}
