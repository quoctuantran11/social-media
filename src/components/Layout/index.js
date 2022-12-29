import { Outlet } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import Sidebar from "../Sidebar";

const Layout = () => {
    const {
        authenticated
    } = useAuth();

    return (
        <main className="App">
            {authenticated ? <Sidebar /> : null}
            <Outlet />
        </main>
    )
}

export default Layout