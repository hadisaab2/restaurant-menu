import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
} from "react-router-dom";
import { ADMINSIGNIN, RESTAURANTDASH, THEME1URL, THEME2URL } from "./URLs";
import Theme1 from "../pages/theme1";
import Theme1HOC from "../HOC/theme1Hoc";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path={THEME1URL} element={Theme1HOC(Theme1)} />
        <Route path={ADMINSIGNIN} element={AdminLayout(AdminSignin)} />
        <Route path={RESTAURANTDASH} element={AdminLayout(RestaurantDash)} />

        
      </RoutesWrapper>
    </BrowserRouter>
  );
}
