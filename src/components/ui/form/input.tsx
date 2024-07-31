interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="flex-1 border-2 rounded-lg h-9 px-3 outline-none"
      {...rest}
    />
  );
}
