import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BasicLayout = lazy(() => import("../layouts/BasicLayout"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const MainPage = lazy(() => import("../pages/MainPage"));

// const MyReservationPage = lazy(
//   () => import("../pages/mypage/MyReservationPage"),
// );import AdminLayout from './../layouts/AdminLayout';

const root = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <MainPage /> },
      // { path: "mypage/reserve", element: <MyReservationPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
]);

export default root;
