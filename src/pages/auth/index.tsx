import type { RouteObject } from "react-router-dom";

import SignIn from "./signIn";
import SignUp from "./signUp";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
];
