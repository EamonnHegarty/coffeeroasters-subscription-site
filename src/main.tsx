import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme.ts";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ px: { xs: 2, md: 5, lg: 10, xl: 20 } }}>
        <Navbar />
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
