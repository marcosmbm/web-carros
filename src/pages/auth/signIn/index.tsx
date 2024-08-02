import { useAuth } from "@/hooks";
import { useFormSignIn, type FormData } from "./hooks/useFormSignIn";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Container, Input, Button } from "@/components/ui";

export default function SignIn() {
  const { signIn } = useAuth();

  const { register, handleSubmit, errors } = useFormSignIn();

  const navigate = useNavigate();

  async function onSubmit(data: FormData) {
    try {
      const { email, password } = data;

      await signIn(email, password);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert("Erro ao logar usuário");
    }
  }

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

        <form
          className="w-full max-w-xl flex flex-col p-4 bg-white shadow-md rounded-lg gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Digite seu email"
            type="email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            placeholder="Digite sua senha"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />

          <Button type="submit">Acessar</Button>
        </form>

        <span className="mt-4">
          Ainda não possui uma conta? <Link to={"/register"}>Cadastre-se</Link>
        </span>
      </div>
    </Container>
  );
}
