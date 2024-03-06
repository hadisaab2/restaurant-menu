import { Navigate } from "react-router-dom";
// import { useValidateTokenQueryQuery } from "../apis/auth/validateToken";
import { ADMINSIGNIN } from "./URLs";

const ProtectedRoute = ({ children }) => {
  // const { status } = useValidateTokenQueryQuery();
  // if (status !== "pending") {
  //   if (status === "error") {
  //     return <Navigate to={ADMINSIGNIN} replace />;
  //   }
  //   return children;
  // }
  return children
};

export default ProtectedRoute;
