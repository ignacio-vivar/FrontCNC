import { createBrowserRouter } from "react-router-dom";

import Home from "./Home.tsx";
import Layout from "./Layout.tsx";
import ErrorDetail from "./ErrorDetail.tsx";
import ModuleConditions from "./ModuleConditions.tsx";
import Material from "./Material.tsx";
import TPS from "./TPS.tsx";
import SSCNC from "./SSCNC.tsx";
import Videos from "./Videos.tsx";
import Contact from "./Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorDetail />,
    children: [
      { index: true, element: <Home /> },
      { path: "/module-conditions", element: <ModuleConditions /> },
      { path: "/material", element: <Material /> },
      { path: "/tps", element: <TPS /> },
      { path: "/sscnc", element: <SSCNC /> },
      { path: "/videos", element: <Videos /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
