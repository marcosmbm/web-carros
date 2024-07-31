import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Container, Input, Button } from "@/components/ui";

export default function SignIn() {
  return (
    <Container>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Link to={"/"} className="mb-6 max-w-sm w-full">
          <img
            src={logo}
            alt="Logo da aplicação web carros"
            className="w-full"
          />
        </Link>

        <form className="w-full max-w-2xl flex flex-col p-4 bg-white shadow-md rounded-lg gap-4">
          <Input placeholder="Digite seu email" type="email" />
          <Input placeholder="Digite sua senha" type="password" />

          <Button type="submit">Acessar</Button>
        </form>

        <span className="mt-4">
          Ainda não possui uma conta? <Link to={"/register"}>Cadastre-se</Link>
        </span>
      </div>
    </Container>
  );
}
