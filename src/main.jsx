import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./base/grid.scss";
import "./base/reset.scss";
import "./base/index.scss";
import "./scss/theme/light.scss";
import "./scss/theme/dark.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
