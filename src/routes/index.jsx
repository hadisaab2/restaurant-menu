import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { ADMINSIGNIN, RESTAURANT, RESTAURANTDASH, SUPERADMIN } from "./URLs";
// import Theme1 from "../pages/theme1";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";
import { withRedirection } from "../HOC/sign-in";
import SuperAdmin from "../pages/superadmin";
import Template from "../HOC/Template";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path={RESTAURANT} element={<Template />} />
        <Route path={ADMINSIGNIN} Component={withRedirection(AdminSignin)} />
        <Route
          path={RESTAURANTDASH}
          Component={AdminLayout(RestaurantDash, 2)}
        />
        <Route path={SUPERADMIN} Component={AdminLayout(SuperAdmin, 1)} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}
