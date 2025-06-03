import React, { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
console.log(document.cookie);
  useEffect(() => {
    axiosPublic
      .post("/auth/verify-token", {}, { withCredentials: true })
      .then((res) => {
         console.log("VERIFY RESPONSE:", res.data);
        if (res.data?.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);
  console.log(user);
  const AuthInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
