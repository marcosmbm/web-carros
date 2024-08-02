import RouterApp from "./routes";
import AuthProvider from "./contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  );
}
