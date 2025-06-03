import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const PrivateRoute = ({ children }) => {
  const { user, setUser, loading, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  useEffect(() => {
    const verifyToken = async () => {
      try {
        setLoading(true);
        const res = await axiosPublic.post(
          "/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    if (!user) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) {
    return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
