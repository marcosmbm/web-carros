import { Spinner } from "../loaders";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <button
      className="flex-1 rounded-lg min-h-9 px-3 bg-zinc-900 text-white font-medium text-lg flex items-center justify-center"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
