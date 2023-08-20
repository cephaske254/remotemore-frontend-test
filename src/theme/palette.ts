import { alpha } from "@mui/material/styles";

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  // main: "#f97a57",
  main: "#0ABF5E",
  contrastText: GREY[200],
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const palette = {
  grey: GREY,
  primary: PRIMARY,
  success: SUCCESS,
  info: INFO,
  secondary: SECONDARY,
  warning: WARNING,
  error: ERROR,
  background: {
    default: "#dce0e7",
    // paper: "#25262a",
  },
  common: {
    dark: "#0A1529",
    darkLight: "#343C42",
    light: "#f4f4f4",
    lightGreen: "#619D84",
    black: "#000000",
    purple:"#6f64A1"
  },
} as const;

declare module "@mui/material/styles" {
  interface CommonColors {
    dark: string;
    light: string;
    darkLight: string;
    lightGreen: string;
    purple: string;
  }
}

export default palette;
