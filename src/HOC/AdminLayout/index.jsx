import { useEffect } from "react";
import ProtectedRoute from "../../routes/protectedRoutes";

export default function AdminLayout(WrappedComponent, role) {
  // useEffect(() => {
  //   const link = document.getElementById("favicon");
  //   link.href = `menugicLogo.png`;

  // })
  return (props) => {

    return (
      <ProtectedRoute role={role}>
        <WrappedComponent {...props} />
      </ProtectedRoute>
    );
  };
}
