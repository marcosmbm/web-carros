import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  model: z.string().min(1, "O modelo é obrigatório"),
  year: z.string().min(1, "O ano do carro é obrigatório"),
  km: z.string().min(1, "O km do carro é obrigatório"),
  price: z.string().min(1, "O preço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  phone: z
    .string()
    .min(1, "O telefone é obrigatório")
    .refine((value) => /^(\d{10,12})$/.test(value), {
      message: "Número de telefone inválido",
    }),
  description: z.string().min(1, "Descrição obrigatória"),
});

export type FormData = z.infer<typeof schema>;

export function useNewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    reset,
    errors,
  };
}
