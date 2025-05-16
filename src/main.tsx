
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Update the CSS import to point to our new location
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
