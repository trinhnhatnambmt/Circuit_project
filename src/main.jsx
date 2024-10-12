import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./base/grid.scss";
import "./base/reset.scss";
import "./base/index.scss";
import "./scss/theme/light.scss";
import "./scss/theme/dark.scss";
import "animate.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        <ToastContainer />
    </StrictMode>
);
