import "@fontsource/ubuntu";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./pages/error/Error";
import Clocks from "./pages/clocks/Clocks";
import Meetings from "./pages/meetings/Meetings";

import MainLayout from "./layout/MainLayout";
import { StyledEngineProvider } from "@mui/material";
import ModalContextProvider from "./context/ModalContextProvider";
import ClocksContextProvider from "./context/ClocksContextProvider";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Clocks />,
      },
      {
        path: "clocks",
        element: <Clocks />,
      },
      {
        path: "meetings/:id",
        element: <Meetings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClocksContextProvider>
      <ModalContextProvider>
        <StyledEngineProvider injectFirst>
          <RouterProvider router={routes} />
        </StyledEngineProvider>
      </ModalContextProvider>
    </ClocksContextProvider>
  </React.StrictMode>
);
