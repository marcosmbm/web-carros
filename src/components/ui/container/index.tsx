interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-7xl px-4 mx-auto">{children}</div>;
}
