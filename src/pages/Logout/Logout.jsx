import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../../store/authSlice";
const Logout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const location = useLocation();
  useEffect(() => {
    localStorage.removeItem("userToken");
    dispatch(authUser(""));
  }, []);
  return <Navigate to="/auth" />;
};

export default Logout;
