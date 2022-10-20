import React, { createContext } from 'react';

const AuthContext = createContext();

const ContextAPI = ({ children }) => {

    const user = { name: "ariful" }

    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;