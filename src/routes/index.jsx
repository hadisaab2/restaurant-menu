import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { ADMINSIGNIN, RESTAURANTDASH, SUPERADMIN, THEME1URL, THEME2URL } from "./URLs";
import Theme1 from "../pages/theme1";
import Theme1HOC from "../HOC/theme1Hoc";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withRedirection } from "../HOC/sign-in";
import SuperAdmin from "../pages/superadmin";

export default function ApplicationRoutes() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesWrapper>
          <Route path={THEME1URL} element={Theme1HOC(Theme1)} />
          <Route path={ADMINSIGNIN} Component={withRedirection(AdminSignin)} />
          <Route path={RESTAURANTDASH} element={AdminLayout(RestaurantDash)} />
          <Route path={RESTAURANTDASH} element={AdminLayout(RestaurantDash)} />
          <Route path={SUPERADMIN} element={AdminLayout(SuperAdmin)} />
        </RoutesWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
