import { useFormSignUp, type FormData } from "./hooks/useFormSignUp";

import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Container, Input, Button } from "@/components/ui";

export default function SignUp() {
  const { register, handleSubmit, errors } = useFormSignUp();

  function onSubmit(data: FormData) {
    console.log(data);
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

          <Button type="submit">Cadastrar</Button>
        </form>

        <span className="mt-4">
          Já possui uma conta? <Link to={"/login"}>Faça login</Link>
        </span>
      </div>
    </Container>
  );
}
