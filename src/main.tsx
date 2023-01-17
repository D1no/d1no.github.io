import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { defaultTheme, ThemeProvider, Preflight } from "@xstyled/emotion";

const theme = {
  ...defaultTheme,
  // Customize your theme here
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Preflight />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
