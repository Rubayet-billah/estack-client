import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    // set user in user state
    const [user, setUser] = useState(null);
    // set loading state for handle private route location
    const [loader, setLoader] = useState(true);

    // create various methods auth provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user with email and password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login user with google
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    // login user with github
    const githubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider);
    }

    // update user profile
    const updateUserProfile = (fullName) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: fullName
        })
    }

    // log out user 
    const logoutUser = () => {
        return signOut(auth);
    }


    // observe user using onAuthSateChange
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, user => {
                setUser(user);
                setLoader(false)
            })
        }
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logoutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;