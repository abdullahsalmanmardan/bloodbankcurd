import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    // if there is token don't go the registration or login page
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;
