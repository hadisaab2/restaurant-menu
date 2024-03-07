import { Navigate } from "react-router-dom";

export const withRedirection = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) return <Navigate to="/restaurant/admin" replace />;
    return <WrappedComponent {...props} />;
  };
};
