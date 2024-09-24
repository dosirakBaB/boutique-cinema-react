import React from "react";
import MemberHeader from "./../components/layouts/MemberHeader";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import MemberSidebar from "./../components/layouts/MemberSidebar";

export default function BasicLayout() {
  return (
    <div className="relative min-h-screen pb-[150px]">
      <div className="mx-auto w-layout">
        <MemberHeader />
      </div>
      <div className="my-5 border-b border-gray-400"></div>
      <div className="mx-auto flex w-layout">
        {/* <MemberSidebar /> */}
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
