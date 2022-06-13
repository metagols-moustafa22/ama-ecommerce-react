import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AppLayout } from "./widgets/layouts/AppLayout";
import { Home } from "./home/Home";

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
