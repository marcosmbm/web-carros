import { useAuth } from "@/hooks";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: React.ReactNode;
}

export function Private({ children }: PrivateProps) {
  const { signed, loadingAuth } = useAuth();

  if (loadingAuth) return <div />;

  return signed ? children : <Navigate to={"/login"} />;
}
