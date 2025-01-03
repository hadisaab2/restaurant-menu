import ProtectedRoute from "../../routes/protectedRoutes";

export default function AdminLayout(WrappedComponent, role) {
  return (props) => {
    return (
      <ProtectedRoute role={role}>
        <WrappedComponent {...props} />
      </ProtectedRoute>
    );
  };
}
