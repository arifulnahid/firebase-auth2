import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth, googleSignIn } from '../firebase/firebaseAuth';

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {

    const [user, setUser] = useState();

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out Succsessfuly");
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("current user: ", currentUser);
            setUser(currentUser);
        });
        return () => { unsubscribe() }
    }, []);

    const authInfo = { user, googleSignIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;