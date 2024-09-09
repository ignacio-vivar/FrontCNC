import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { LayoutProvider } from "./context/LayoutContext";
// import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </ChakraProvider>
  </React.StrictMode>
);
