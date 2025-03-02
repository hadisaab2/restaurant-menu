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
    if (isLoggedIn)
      return (
        <Navigate
          to={userInfo.role_id === 1 ? "/superadmin" : "/restaurant/admin"}
        />
      );
    return <WrappedComponent {...props} />;
  };
};
