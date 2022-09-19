import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/general/reset.css";
import "./styles/general/page.css";

const container = document.getElementById("root");
const root = createRoot(container);
<React.StrictMode>{root.render(<App />)}</React.StrictMode>;
