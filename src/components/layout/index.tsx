import { Outlet } from "react-router-dom";
import { Header } from "../ui";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
