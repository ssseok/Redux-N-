import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}
