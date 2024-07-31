interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex-1 rounded-lg min-h-9 px-3 bg-zinc-900 text-white font-medium text-lg"
      {...rest}
    >
      {children}
    </button>
  );
}
