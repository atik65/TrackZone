import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navigation/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
