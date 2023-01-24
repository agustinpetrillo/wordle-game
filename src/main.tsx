import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./layout/Layout";
import { UtilsProvider } from "./utils/Utils";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <UtilsProvider>
        <Layout>
          <App />
        </Layout>
      </UtilsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
