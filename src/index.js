import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mlc from "./Mlc";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Mlc />
  </React.StrictMode>
);

reportWebVitals();
