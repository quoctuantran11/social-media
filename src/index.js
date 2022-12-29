import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { UserAuthProvider } from "./context/authContext";
import "./index.scss";
import "./i18n";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <UserAuthProvider>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </UserAuthProvider>
            </Router>
        </Suspense>
    </React.StrictMode>
);