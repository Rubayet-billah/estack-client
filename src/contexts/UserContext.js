import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    // set user in user state
    const [user, setUser] = useState(null);

    // create various methods auth provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login user with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // login user with github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // observe user using onAuthSateChange
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, user => {
                setUser(user);
            })
        }
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;