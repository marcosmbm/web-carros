import type { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  register?: UseFormRegister<any>;
  name?: string;
  error?: string;
  rules?: RegisterOptions;
}

export function TextArea({
  name = "",
  error,
  rules,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <textarea
        className="flex-1 border-2 rounded-lg min-h-20 px-3 outline-none resize-none"
        {...(register ? register(name, rules) : {})}
        {...rest}
      />

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
