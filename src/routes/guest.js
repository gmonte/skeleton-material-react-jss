import { lazy } from "react";

const DemoScreen = lazy(() => import("../screens/guest/DemoScreen"));

const routes = {
  demo: {
    path: "/",
    exact: true,
    Component: DemoScreen
  }
};

export default routes;
