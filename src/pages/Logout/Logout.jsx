import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Logout = () => {
  const isAuth = useSelector((state) => state.auth);

  const location = useLocation();
  return (
    localStorage.removeItem("userToken") && (
      <Navigate to="/auth" state={{ from: location }} replace />
    )
  );
};

export default Logout;
