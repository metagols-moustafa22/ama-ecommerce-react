import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AppLayout } from "./widgets/layouts/AppLayout";

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<div>Home Page</div>}></Route>
      </Route>
    </Routes>
  );
};
