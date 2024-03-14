import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
  json,
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
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios"
export default function ApplicationRoutes() {
  const queryClient = new QueryClient();
  const[theme,setTheme]=useState({})
  useEffect(()=>{
    console.log(window.location.pathname)
    if (window.location.pathname.startsWith('/theme1/')){
    axios.get(`http://localhost:4000/restaurants/Addict`).then((res)=>{
      res.data.theme && setTheme(JSON.parse(res.data.theme))
    })
  }
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      {console.log(theme)}
      <ThemeProvider theme={theme} >
      <BrowserRouter>
        <RoutesWrapper>
          <Route path={THEME1URL} element={Theme1HOC(Theme1)} />
          <Route path={ADMINSIGNIN} Component={withRedirection(AdminSignin)} />
          <Route path={RESTAURANTDASH} element={AdminLayout(RestaurantDash)} />
          <Route path={SUPERADMIN} element={AdminLayout(SuperAdmin)} />
        </RoutesWrapper>
      </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
