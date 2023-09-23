import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./common/pages/home/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PATH_CONSTANTS } from "./shared/routePath";
import LCFDashBoard from "./lcf/pages/LCFDashBoard";

function App() {
  const ROUTES = createBrowserRouter([
    {
      path: PATH_CONSTANTS.HOME.LCF_DASHBOARD,
      element: <LCFDashBoard />
    },
    {
      path: '',
      element: <Home />
    }
  ]);
  return (
      <RouterProvider router={ROUTES} />
  );
}

export default App;
