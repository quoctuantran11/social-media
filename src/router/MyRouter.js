import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';

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
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}