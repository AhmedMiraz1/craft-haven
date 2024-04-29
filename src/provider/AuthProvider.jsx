import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

//   console.log(user);

  const [loading, setLoading] = useState(true);

 

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = async (name, photo) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    const result = getAuth();
    return result.currentUser;
  };

  // sing in user
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };
   //github login
   const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // logout
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    googleLogin,
    githubLogin, 
    logOut, 
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes={
  children:PropTypes.node
}