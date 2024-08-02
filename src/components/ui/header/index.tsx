import { useAuth } from "@/hooks";

import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

import logo from "@/assets/logo.svg";

export function Header() {
  const { signed, loadingAuth } = useAuth();

  return (
    <header className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <div className="w-full max-w-7xl flex items-center justify-between px-4 mx-auto">
        <Link to={"/"}>
          <img src={logo} alt="logo da aplicação web carros" />
        </Link>

        {!loadingAuth && (
          <div className="border-2 border-gray-900 rounded-full p-1">
            {signed ? (
              <Link to={"/dashboard"}>
                <FiUser size={24} color="#000000" />
              </Link>
            ) : (
              <Link to={"/login"}>
                <FiLogIn size={24} color="#000000" />
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
