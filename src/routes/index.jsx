import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
  Navigate,
} from "react-router-dom";
import { ADMINSIGNIN, HOME, HOME_V2, HOME_V3, HOME_V4, NOTFOUND, RESTAURANT, RESTAURANTDASH, SUPERADMIN, NOTSUBSCRIBED } from "./URLs";
// import Theme1 from "../pages/theme1";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";
import Home from "../pages/home";
import HomeV3 from "../pages/home-v3";
import HomeV4 from "../pages/home-v4";

import { withRedirection } from "../HOC/sign-in";
import SuperAdmin from "../pages/superadmin";
import Template from "../HOC/Template";
import NotFound from "../pages/notfound";
import NotSubscribed from "../pages/notsubscribed";
import SubDomainTemplate from "../HOC/SubDomainTemplate";

export default function ApplicationRoutes() {
  const subdomain = window.location.hostname.split('.')[0];

  return (
    <BrowserRouter>
      <RoutesWrapper>
        {/* Handle subdomain routing */}
        {subdomain !== "www" && subdomain !== "menugic" && subdomain != "localhost" ? (
          <Route path="/" element={<SubDomainTemplate restaurantName={subdomain} />} />
        ) : (
          <>
            {/* Existing routes */}
            <Route path={HOME} element={<HomeV3 />} />
            <Route path={HOME_V2} element={<Navigate to={HOME} replace />} />
            <Route path={HOME_V3} element={<Navigate to={HOME} replace />} />
            <Route path={HOME_V4} element={<HomeV4 />} />

            <Route path={RESTAURANT} element={<Template />} />
            <Route path={NOTFOUND} element={<NotFound />} />
            <Route path={NOTSUBSCRIBED} element={<NotSubscribed />} />
            <Route path={ADMINSIGNIN} Component={withRedirection(AdminSignin)} />
            <Route path={RESTAURANTDASH} Component={AdminLayout(RestaurantDash, 2)} />
            <Route path={SUPERADMIN} Component={AdminLayout(SuperAdmin, 1)} />
          </>
        )}
      </RoutesWrapper>
    </BrowserRouter>
  );
}
