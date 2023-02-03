import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  defaultTheme,
  ThemeProvider,
  Preflight,
  createGlobalStyle,
} from "@xstyled/emotion";

const theme = {
  ...defaultTheme,
  fonts: {
    mono: defaultTheme.fonts.mono,
    serif: defaultTheme.fonts.serif,
    sans: "Mona Sans" + ", " + defaultTheme.fonts.sans,
    header: "Hubot Sans" + ", " + defaultTheme.fonts.serif,
  },
  // Customize your theme here
};

/**
 * Sets the default font going forward.
 */
const ApplyFontStyle = createGlobalStyle`
  body { 
    font-family: ${theme.fonts.sans};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.header};
  }
`;

console.dir(theme.texts);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Preflight />
      <ApplyFontStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
