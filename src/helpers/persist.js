import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useAuth } from "../context/authContext";

export default function PersistLogin() {
    const { authenticated,
            loading, 
            setLoading, 
            loggedUser } = useAuth();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyRefresh = async () => {
            setLoading(true)
            
            try {
                console.log(isMounted)
                await refresh();
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false)
                
            }
        }

        !authenticated ? verifyRefresh() : setLoading(false);

        return () => {
            console.log("in return")
            isMounted = false;
        }
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${loading}`)
        console.log(`token: ${loggedUser?.token}`)
    }, [loading])

    return (
        <Outlet />
    )
}