import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BasicLayout = lazy(() => import("../layouts/BasicLayout"));
const MainPage = lazy(() => import("../pages/MainPage"));
const root = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
]);

export default root;
