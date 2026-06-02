import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
  Navigate,
} from "react-router-dom";
import { ADMINSIGNIN, HOME, HOME_V2, HOME_V3, HOME_V4, NOTFOUND, RESTAURANT, RESTAURANTDASH, SUPERADMIN, NOTSUBSCRIBED } from "./URLs";
import Template from "../HOC/Template";
import SubDomainTemplate from "../HOC/SubDomainTemplate";

// Lazy load pages that aren't needed on initial menu view
const HomeV3 = lazy(() => import("../pages/home-v3"));
const HomeV4 = lazy(() => import("../pages/home-v4"));
const NotFound = lazy(() => import("../pages/notfound"));
const NotSubscribed = lazy(() => import("../pages/notsubscribed"));

// Lazy load admin pages (admin panel, superadmin, sign-in)
const AdminSigninPage = lazy(() =>
  Promise.all([
    import("../pages/adminauth"),
    import("../HOC/sign-in"),
  ]).then(([adminMod, signInMod]) => ({
    default: signInMod.withRedirection(adminMod.default),
  }))
);

const RestaurantDashPage = lazy(() =>
  Promise.all([
    import("../pages/restaurantdash"),
    import("../HOC/AdminLayout"),
  ]).then(([dashMod, layoutMod]) => ({
    default: layoutMod.default(dashMod.default, 2),
  }))
);

const SuperAdminPage = lazy(() =>
  Promise.all([
    import("../pages/superadmin"),
    import("../HOC/AdminLayout"),
  ]).then(([adminMod, layoutMod]) => ({
    default: layoutMod.default(adminMod.default, 1),
  }))
);

const SuspenseFallback = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div style={{ width: 40, height: 40, border: "3px solid #e0e0e0", borderTop: "3px solid #333", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export default function ApplicationRoutes() {
  const subdomain = window.location.hostname.split('.')[0];

  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseFallback />}>
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
              <Route path={ADMINSIGNIN} element={<AdminSigninPage />} />
              <Route path={RESTAURANTDASH} element={<RestaurantDashPage />} />
              <Route path={SUPERADMIN} element={<SuperAdminPage />} />
            </>
          )}
        </RoutesWrapper>
      </Suspense>
    </BrowserRouter>
  );
}
