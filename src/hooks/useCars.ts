import { useState, useEffect } from "react";
import { CarService } from "@/services/repositories";
import type { CarModel } from "@/models";

export function useCars() {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      try {
        const listCars = await CarService.listAllCars();

        setCars(listCars);
      } catch (error) {
        alert("Não foi possível buscar os carros");
      } finally {
        setIsLoading(false);
      }
    }
    loadCars();
  }, []);

  return {
    cars,
    isLoading,
  };
}
