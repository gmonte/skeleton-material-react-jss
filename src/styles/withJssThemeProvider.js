import React, { useState } from "react";
import { JssProvider } from "react-jss";
import { create as createJss } from "jss";
import jssPreset from "jss-preset-default";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createGenerateClassName } from "@material-ui/styles";

const jss = createJss(jssPreset());

const generateClassName = createGenerateClassName();

const withJssThemeProvider = theme => WrappedComponent => props => {
  const [currentTheme] = useState(createMuiTheme(theme));

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        <WrappedComponent {...props} />
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default withJssThemeProvider;
