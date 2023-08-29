import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/main.css";
import FontViewer from "./pages/FontViewer";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <h1 className="my-8 text-indigo-400 text-4xl text-center font-bold shiromedaserif-regular ">
      {" "}
      አማርኛ ጽሁፎች ይህንን ይመስላሉ{" "}
    </h1>
    <FontViewer />
  </React.StrictMode>
);
