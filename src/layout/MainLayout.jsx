import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen text-sm sm:text-base">
      <Header />
      <main className="flex-1 bg-gray-100">
        <div className="xl:px-0">
          {/* max-w-7xl mx-auto */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
