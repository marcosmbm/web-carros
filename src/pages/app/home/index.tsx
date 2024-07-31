import { Container, Input } from "@/components/ui";
import { CarItem } from "@/components/carItem";

export default function Home() {
  return (
    <Container>
      <form className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center justify-between gap-2 shadow-md">
        <Input type="text" placeholder="Digite o nome do carro" />

        <button
          type="submit"
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg hover:bg-red-600 duration-300"
        >
          Buscar
        </button>
      </form>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o Brasil.
      </h1>

      <main className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
      </main>
    </Container>
  );
}
