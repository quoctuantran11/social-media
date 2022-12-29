import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PersistLogin from "../helpers/persist";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import { Login } from "../pages/Login"
import Register from "../pages/Register";
import ErrorPage from "../pages/Error";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

function PrivateRoute({ authenticated }) {
    const location = useLocation()

    return (
        authenticated ? <Outlet /> :
            <Navigate to="/login" state={{ from: location }} replace />
    )
}

function PublicRoute({ authenticated }) {
    return (
        !authenticated ? <Outlet /> :
            <Navigate to="/" replace={true} />
    )
}

export default function MyRouter() {
    const {
        authenticated,
        loading,
    } = useAuth();

    return (
        loading ? <Loading /> : (
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route element={<PersistLogin />}>
                        <Route path="/" element={<Home />} />
                        <Route element={<PrivateRoute authenticated={authenticated} />}>
                            <Route path="explore" element={<Explore />} />
                        </Route>
                    </Route>
                    <Route element={<PublicRoute authenticated={authenticated} />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        )
    )
}