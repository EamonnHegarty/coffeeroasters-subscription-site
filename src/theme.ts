import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#FEFCF7",
    },
    primary: {
      main: "#0E8784",
      dark: "#333D4B",
      light: "#FDD6BA",
    },
    secondary: {
      main: "#FEFCF7",
      light: "#83888F",
    },
    info: {
      main: "#66D2CF",
    },
  },
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Fraunces", "serif"].join(","),
      fontSize: 72,
    },
    h2: {
      fontFamily: ["Fraunces", "serif"].join(","),
      fontSize: 40,
    },
    h3: {
      fontFamily: ["Fraunces", "serif"].join(","),
      fontSize: 32,
    },
    h4: {
      fontFamily: ["Fraunces", "serif"].join(","),
      fontSize: 24,
    },
    // TITLE ALTERNATE BIG
    h5: {
      fontFamily: ["Fraunces", "serif"].join(","),
      fontSize: 140,
    },
    body1: {
      fontFamily: ["Barlow", "sans-serif"].join(","),
      fontSize: 16,
    },
  },
});

export { theme };
