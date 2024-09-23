import React from "react";
import MemberHeader from "./../components/layouts/MemberHeader";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";

export default function BasicLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto w-layout">
        <MemberHeader />
      </div>
      <div className="my-5 border-b border-gray-400"></div>
      <main>
        <div className="mx-auto min-h-full w-layout">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
