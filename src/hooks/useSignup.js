import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }
      await updateProfile(projectAuth.currentUser, { displayName });
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
