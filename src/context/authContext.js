import { createContext, useState, useEffect, useContext } from "react";

const UserAuthContext = createContext();

function UserAuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const unsubcribe = () => {
            if (loggedUser) {
                setAuthenticated(true);
                setLoading(false);
                // setLoggedUser(currentUser);
                // let username = currentUser.displayName;

                // const usernameRef = ref(db, `users/${username}/connections`);
                // const lastOnlineRef = ref(db, `users/${username}/lastOnline`);
                // const connectedRef = ref(db, '.info/connected');

                // onValue(connectedRef, (snap) => {
                //     if (snap.val() === true) {
                //         const con = push(usernameRef);

                //         onDisconnect(con).remove();

                //         set(con, true);

                //         onDisconnect(lastOnlineRef).set(serverTimestamp());
                //     }
                // })
            }
            else {
                setAuthenticated(false);
                setLoading(false);
            }
        };

        unsubcribe();
    }, [loggedUser])

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