import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useMemo } from "react";
import baseTheme from "./theme";

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => createTheme(baseTheme), []);

  return (
    <MuiThemeProvider {...{ theme }}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

type ThemeProviderProps = Omit<
  React.ComponentProps<typeof MuiThemeProvider>,
  "theme"
>;

export { ThemeProvider };
