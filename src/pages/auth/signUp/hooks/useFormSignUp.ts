import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "O campo de nome é obrigatório"),
  email: z
    .string()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .email("Email inválido"),
  password: z.string().min(1, "O campo de senha é obrigatório"),
});

export type FormData = z.infer<typeof schema>;

export function useFormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  return {
    register,
    handleSubmit,
    errors,
    clearErrors,
  };
}
