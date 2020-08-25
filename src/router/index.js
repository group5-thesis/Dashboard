import PageNotFound from "pages/messages/PageNotFound";
import Login from "pages/public/Login";
import Homescreen from "pages/public/HomeScreen";
import { Dashboard } from "pages/auth";

const publicRoutes = [
  {
    component: Login,
    path: "/login",
    exact: true,
  },
];
const protectedRoutes = [
  {
    component: Dashboard,
    path: "/dashboard",
    exact: true,
  },
];
const guestRoutes = [
  {
    component: Homescreen,
    path: "/",
    exact: true,
  },
  {
    component: PageNotFound,
    path: "*",
  },
];
export { guestRoutes, protectedRoutes, publicRoutes };
