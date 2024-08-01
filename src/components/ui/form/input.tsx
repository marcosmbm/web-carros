import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  register?: UseFormRegister<any>;
  name?: string;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  register,
  name = "",
  rules,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <input
        className="flex-1 border-2 rounded-lg min-h-9 px-3 outline-none"
        {...(register ? register(name, rules) : {})}
        {...rest}
      />

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
