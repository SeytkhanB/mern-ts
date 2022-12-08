import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EditDeck } from "../components/EditDeck";
import { ErrorPage } from "../pages/ErrorPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <EditDeck />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
