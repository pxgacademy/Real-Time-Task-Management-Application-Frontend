import PropTypes from "prop-types";
import ContextProvider from "./ContextProvider";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const APIcontext = ({ children }) => {
  const API_LINK = import.meta.env.VITE_API_LINK;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // send jwt token
      const sendEmailToMakeJWTtoken = async () => {
        const user = { email: currentUser?.email };
        try {
          await axios.post(`${API_LINK}/jwt`, user, { withCredentials: true });
        } catch (err) {
          Swal.fire({
            title: "Error",
            text: err.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        } finally {
          setLoading(false);
        }
      };

      // delete jwt token
      const deleteToken = async () => {
        try {
          await axios.delete(`${API_LINK}/logout`, { withCredentials: true });
        } catch (err) {
          Swal.fire({
            title: "Error",
            text: err.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        } finally {
          setLoading(false);
        }
      };

      if (currentUser?.email) sendEmailToMakeJWTtoken();
      else deleteToken();
    });

    return () => unsubscribe();
  }, []);

  const value = {
    isDark,
    setIsDark,
    isMenuOpen,
    setIsMenuOpen,
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    updateUser,
    signInUser,
    googleSignIn,
    signOutUser,
  };
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

APIcontext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default APIcontext;
