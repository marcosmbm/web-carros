import type { RouteObject } from "react-router-dom";

import Home from "./home";
import CarDetail from "./car";
import Dashboard from "./dashboard";
import New from "./dashboard/new";

import { Private } from "@/components/Private";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/car/:id",
    element: (
      <Private>
        <CarDetail />
      </Private>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />
      </Private>
    ),
  },
  {
    path: "/dashboard/new",
    element: (
      <Private>
        <New />
      </Private>
    ),
  },
];
