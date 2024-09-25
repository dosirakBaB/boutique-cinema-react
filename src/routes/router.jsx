import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import JoinPage from "../pages/member/JoinPage";

const BasicLayout = lazy(() => import("../layouts/BasicLayout"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const MainPage = lazy(() => import("../pages/MainPage"));
const InfoPage = lazy(() => import("../pages/info/InfoPage"));
const TermsPage = lazy(() => import("../pages/support/TermsPage"));
const ScreenrulePage = lazy(() => import("../pages/support/ScreenrulePage"));
const PrivacyPage = lazy(() => import("../pages/support/PrivacyPage"));
const TheaterPage = lazy(() => import("../pages/greeting/TheaterPage"));
const CouplePage = lazy(() => import("../pages/greeting/CouplePage"));

// const MyReservationPage = lazy(
//   () => import("../pages/mypage/MyReservationPage"),
// );import AdminLayout from './../layouts/AdminLayout';

const root = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "info", element: <InfoPage /> },
      { path: "/support/terms", element: <TermsPage /> },
      { path: "/support/screenrule", element: <ScreenrulePage /> },
      { path: "/support/privacy", element: <PrivacyPage /> },
      { path: "/greeting/teater", element: <TheaterPage /> },
      { path: "/greeting/couple", element: <CouplePage /> },
      // { path: "mypage/reserve", element: <MyReservationPage /> },
    ],
  },
  {
    path: "/member/join",
    element: <JoinPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
]);

export default root;
