import { ThemeOptions } from "@mui/material";

const Buttons = (): ThemeOptions["components"] => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
};

export default Buttons;
