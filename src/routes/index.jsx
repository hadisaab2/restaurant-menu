import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { ADMINSIGNIN, NOTFOUND, RESTAURANT, RESTAURANTDASH, SUPERADMIN } from "./URLs";
// import Theme1 from "../pages/theme1";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";
import { withRedirection } from "../HOC/sign-in";
import SuperAdmin from "../pages/superadmin";
import Template from "../HOC/Template";
import NotFound from "../pages/notfound";

export default function ApplicationRoutes() {
  const hostnameParts = window.location.hostname.split('.');
  let subdomain = hostnameParts[0];
  
  if (subdomain === 'www' && hostnameParts.length > 2) {
    subdomain = hostnameParts[1];
  }
  
  console.log(subdomain);
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path={RESTAURANT} element={<Template />} />
        <Route path={NOTFOUND} element={<NotFound />} />

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
