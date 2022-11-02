import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Home from "../pages/Home";
import { Login } from "../pages/Login"
import Register from "../pages/Register";

function PrivateRoute({ element: Component, authenticated }) {
    return (
        authenticated ? <Component /> :
            <Navigate to="/login" replace={true} />
    )
}

function PublicRoute({ element: Component, authenticated }) {
    return (
        !authenticated ? <Component /> :
            <Navigate to="/" replace={true} />
    )
}

export default function MyRouter() {
    const {
        authenticated,
        loading,
    } = useAuth();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/chat" element={<PrivateRoute authenticated={authenticated} element={Chat} />} /> */}
                <Route path="/login" element={<PublicRoute authenticated={authenticated}
                    element={Login} />} />
                <Route path="/register" element={<PublicRoute authenticated={authenticated} element={Register} />} />
                <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
        </Router>
    )
}