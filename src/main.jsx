import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Set the basename for GitHub Pages
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Outfitly-Web-App/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
