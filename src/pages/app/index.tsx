import type { RouteObject } from "react-router-dom";

import Home from "./home";
import CarDetail from "./car";
import Dashboard from "./dashboard";
import New from "./dashboard/new";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/car/:id",
    element: <CarDetail />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/new",
    element: <New />,
  },
];
