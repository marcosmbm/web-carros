import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";

export function PanelHeader() {
  const { signOut } = useAuth();

  return (
    <div className="w-full items-center flex h-10 bg-red-500 text-white rounded-lg font-medium gap-4 px-4 mb-4">
      <Link to={"/dashboard"}>Dashboard</Link>

      <Link to={"/dashboard/new"}>Cadastrar Carro</Link>

      <button type="button" onClick={() => signOut()} className="ml-auto">
        Sair da conta
      </button>
    </div>
  );
}
