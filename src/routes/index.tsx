import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthRoutes } from "@/pages/auth";
import { AppRoutes } from "@/pages/app";

import { Layout } from "@/components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [...AppRoutes],
  },
  ...AuthRoutes,
]);

export default function RouterApp() {
  return <RouterProvider router={router} />;
}
