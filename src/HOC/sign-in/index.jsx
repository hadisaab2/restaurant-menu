import { Navigate } from "react-router-dom";
import { getCookie } from "../../utilities/manageCookies";
import { useEffect } from "react";

export const withRedirection = (WrappedComponent) => {

  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userInfo = JSON?.parse(getCookie("userInfo") || "{}");
    // useEffect(()=>{
    //   const link = document.getElementById("favicon");
    //   link.href = `menugicLogo.png`;
  
    // })
    if (isLoggedIn) {
      if (userInfo.role_id === 1) return <Navigate to="/superadmin" />;
      if (userInfo.role_id === 4) return <Navigate to="/sales/dashboard" />;
      return <Navigate to="/restaurant/admin" />;
    }
    return <WrappedComponent {...props} />;
  };
};
