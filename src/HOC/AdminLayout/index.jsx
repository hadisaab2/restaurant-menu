import ProtectedRoute from "../../routes/protectedRoutes";

export default function AdminLayout(WrappedComponent) {
  return (
    <ProtectedRoute>
      <WrappedComponent />
    </ProtectedRoute>
  );
}
