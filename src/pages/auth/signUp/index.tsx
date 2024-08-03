import { useState } from "react";
import { useAuth } from "@/hooks";
import { useFormSignUp, type FormData } from "./hooks/useFormSignUp";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Container, Input, Button } from "@/components/ui";

export default function SignUp() {
  const { signUp } = useAuth();

  const { register, handleSubmit, errors } = useFormSignUp();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FormData) {
    try {
      const { name, email, password } = data;

      setIsLoading(true);
      await signUp(name, email, password);

      navigate("/login", { replace: true });
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    } finally {
      setIsLoading(false);
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
            placeholder="Digite seu nome"
            type="text"
            name="name"
            register={register}
            error={errors.name?.message}
          />

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

          <Button type="submit" isLoading={isLoading}>
            Cadastrar
          </Button>
        </form>

        <span className="mt-4">
          Já possui uma conta? <Link to={"/login"}>Faça login</Link>
        </span>
      </div>
    </Container>
  );
}
