import { Navigate } from "react-router-dom";
import { getCookie } from "../../utilities/manageCookies";

export const withRedirection = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userInfo = JSON?.parse(getCookie("userInfo") || "{}");

    if (isLoggedIn)
      return (
        <Navigate
          to={userInfo.role_id === 1 ? "/superadmin" : "/restaurant/admin"}
        />
      );
    return <WrappedComponent {...props} />;
  };
};
