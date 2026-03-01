import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../utilities/manageCookies";
import { ADMINSIGNIN } from "./URLs";

export default function ProtectedRoute({ children, role }) {
  const location = useLocation();
  const accessToken = getCookie("accessToken");
  const userInfo = JSON.parse(getCookie("userInfo") || "{}");

  if (!accessToken) {
    return <Navigate to={ADMINSIGNIN} state={{ from: location }} replace />;
  }

  if (role != null) {
    const roleId = userInfo.role_id;
    if (role === 1 && roleId !== 1) return <Navigate to={ADMINSIGNIN} replace />;
    if (role === 2 && roleId !== 2) return <Navigate to={ADMINSIGNIN} replace />;
  }

  return children;
}
