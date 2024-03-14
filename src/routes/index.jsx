import {
  Route,
  BrowserRouter,
  Routes as RoutesWrapper,
} from "react-router-dom";
import {
  ADMINSIGNIN,
  RESTAURANT,
  RESTAURANTDASH,
  SUPERADMIN,
  THEME1URL,
  THEME2URL,
} from "./URLs";

// import Theme1 from "../pages/theme1";
import AdminLayout from "../HOC/AdminLayout";
import AdminSignin from "../pages/adminauth";
import RestaurantDash from "../pages/restaurantdash";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withRedirection } from "../HOC/sign-in";
import SuperAdmin from "../pages/superadmin";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addmenu } from "../redux/products/restaurantActions";
import Template from "../HOC/Template";
const { REACT_APP_BASE_URL } = process.env;

export default function ApplicationRoutes() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState({});
  const dispatch = useDispatch();

  //get restaurant information
  useEffect(() => {
    if (window.location.pathname.startsWith("/")) {
      axios.get(`${REACT_APP_BASE_URL}/restaurants/Addict`).then((res) => {
        res.data.theme && setTheme(JSON.parse(res.data.theme));
        res.data && dispatch(addmenu(res?.data));

      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RoutesWrapper>
            <Route path={RESTAURANT} element={<Template/>} />
            <Route
              path={ADMINSIGNIN}
              Component={withRedirection(AdminSignin)}
            />
            <Route
              path={RESTAURANTDASH}
              element={AdminLayout(RestaurantDash)}
            />
            <Route path={SUPERADMIN} element={AdminLayout(SuperAdmin)} />
          </RoutesWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
