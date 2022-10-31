import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.scss";
import "./i18n";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
);