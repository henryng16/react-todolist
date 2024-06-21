import React from "react";
import reactDom, { createRoot } from "react-dom/client";
import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
