import { createContext, useState, useEffect } from "react";
import { UserService } from "@/services/repositories";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebaseConnection";

interface UserProps {
  uid: string;
  name: string | null;
  email: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextProps {
  signed: boolean;
  loadingAuth: boolean;
  user: UserProps | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser({
          uid: userData.uid,
          email: userData.email,
          name: userData.displayName,
        });
      } else {
        setUser(null);
      }

      setLoadingAuth(false);
    });

    return () => {
      unSub();
    };
  }, []);

  async function signIn(email: string, password: string) {
    await UserService.login({ email, password });
  }

  async function signUp(name: string, email: string, password: string) {
    await UserService.create({ name, email, password });
  }

  async function signOut() {
    await UserService.logout();
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loadingAuth,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
