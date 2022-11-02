import React from "react";
import MyRouter from "./router/MyRouter";
import { UserAuthProvider } from "./context/authContext";

function App() {
    return (
        <div className="App">
            <UserAuthProvider>
                <MyRouter />
            </UserAuthProvider>
        </div>
    );
}

export default App;