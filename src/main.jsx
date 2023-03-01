import React from "react";
import ReactDOM from "react-dom/client";
import { Header, MainContent } from "./containers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainContent />
  </React.StrictMode>
);
