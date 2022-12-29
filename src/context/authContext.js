import { createContext, useState, useEffect, useContext } from "react";
import useRefreshToken from "../hooks/useRefreshToken";

const UserAuthContext = createContext();

function UserAuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const value = {
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        loggedUser,
        setLoggedUser
    }

    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(UserAuthContext)
    if (context === undefined) throw new Error("useAuth must be used within a AuthProvider")

    return context;
}

export { UserAuthProvider, useAuth }