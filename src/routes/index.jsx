import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME } from "./URLs";
import Home from "../pages/home";
import HOC from "../HOC";
import MenuMobile from "../pages/menumobile";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={HOC(MenuMobile)} />
      </Routes>
    </BrowserRouter>
  );
}
