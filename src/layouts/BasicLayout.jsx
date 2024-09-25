import React from "react";
import MemberHeader from "./../components/layouts/MemberHeader";
import Footer from "../components/layouts/Footer";
import { Outlet, useLocation } from "react-router-dom";
import MemberSidebar from "./../components/layouts/MemberSidebar";

export default function BasicLayout() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen pb-[150px]">
      <div className="mx-auto w-layout">
        <MemberHeader />
      </div>
      <div className="my-5 border-b border-gray-400"></div>
      <div className="mx-auto flex w-layout py-5">
        {pathname.includes("/mypage") ? <MemberSidebar /> : <></>}
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
