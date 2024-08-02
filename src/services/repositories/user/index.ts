import { auth } from "@/services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

interface LoginUserProps {
  email: string;
  password: string;
}

interface IUserRepository {
  create(data: CreateUserProps): Promise<void>;
  login(data: LoginUserProps): Promise<void>;
}

class UserRepository implements IUserRepository {
  async create({ name, email, password }: CreateUserProps) {
    const userStorage = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await updateProfile(userStorage.user, {
      displayName: name,
    });
  }

  async login({ email, password }: LoginUserProps) {
    await signInWithEmailAndPassword(auth, email, password);
  }
}

export const UserService = new UserRepository();
