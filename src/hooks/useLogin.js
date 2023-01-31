import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      dispatch({ type: "LOGIN", payload: res.user });
      
      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  return { login, isPending, error };
};
