import { Input, type InputProps } from "./input";

interface FieldInputProps extends InputProps {
  label: string;
}

export function FieldInput({ label, ...rest }: FieldInputProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={rest.id} className="font-medium">
        {label}
      </label>
      <Input {...rest} />
    </div>
  );
}
