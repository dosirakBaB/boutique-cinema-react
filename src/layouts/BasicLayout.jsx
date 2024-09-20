import React from "react";
import MemberHeader from "./../components/layouts/MemberHeader";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";

export default function BasicLayout() {
  return (
    <div>
      <div className="w-layout mx-auto">
        <MemberHeader />
      </div>
      <div className="my-5 border-b border-gray-400"></div>
      <main>
        <div className="w-layout mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
