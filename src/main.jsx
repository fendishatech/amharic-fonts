import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/main.css";
import FontViewer from "./assets/pages/FontViewer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1 className="my-8 text-indigo-400 text-center font-bold">
      {" "}
      Hello React{" "}
    </h1>
    <FontViewer />
  </React.StrictMode>
);
