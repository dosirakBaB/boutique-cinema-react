import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./../components/layouts/AdminHeader";
import AdminSidebar from "./../components/layouts/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-layout">
        <AdminHeader />
      </div>
      <div className="mb-5 border-b border-gray-400"></div>
      <div className="mx-auto flex w-layout pb-16 pt-5">
        <AdminSidebar />
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
