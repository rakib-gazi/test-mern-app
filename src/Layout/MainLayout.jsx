import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="min-h-[calc(100vh-550px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
