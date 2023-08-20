import { ThemeOptions } from "@mui/material/styles";
import typography from "./typography";
import components from "./components";
import palette from "./palette";
import { shadows, customShadows } from "./shadows";

const theme: ThemeOptions = {
  typography,
  components,
  palette,
  shadows,
  customShadows,
  shape: {
    // borderRadius: .2,
  },
};

export default theme;
