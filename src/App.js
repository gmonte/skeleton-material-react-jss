import React from "react";
import withJssThemeProvider from "./styles/withJssThemeProvider";
import ScreenRouter from "./screens/ScreenRouter";
import defaultTheme from "./themes/default";

function App() {
  return <ScreenRouter />;
}

export default withJssThemeProvider(defaultTheme)(App);
