import { Navigate } from "react-router-dom";
import { useValidateTokenQueryQuery } from "../apis/users/validateToken";
import { ADMINSIGNIN } from "./URLs";
import { getCookie } from "../utilities/manageCookies";

const ProtectedRoute = ({ children, role }) => {
  const { status, isSuccess } = useValidateTokenQueryQuery();
  const userInfo = JSON?.parse(getCookie("userInfo") || "{}");

  if (status !== "pending" || !isSuccess) {
    if (status === "error" || userInfo.role_id !== role) {
      return <Navigate to={ADMINSIGNIN} replace />;
    }
  }
  return children;
};

export default ProtectedRoute;
