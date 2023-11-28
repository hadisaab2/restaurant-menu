import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME } from "./URLs";
import Home from "../pages/home";
import HOC from "../HOC";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={HOC(Home)} />
      </Routes>
    </BrowserRouter>
  );
}
