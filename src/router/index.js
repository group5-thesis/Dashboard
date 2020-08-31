import Placeholder from "pages/messages/Placeholder";
import Login from "pages/public/Login";
import Dashboard from "pages/auth/views/Dashboard";

const publicRoutes = [
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: Login,
    path: "/Register",
    exact: true,
  },
];
const protectedRoutes = [
  {
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    name: "Dashboard"
  },
 
  {
    path: "/leave/requests",
    name: "Others",
    exact: false,
  },
  {
    path: "/leave/calendar",
    name: "Others",
    exact: false,
  },
  {
    path: "/employee/performance",
    name: "Others",
    exact: false,
  },
  {
    path: "/employee/organization",
    name: "Others",
    exact: false,
  },
  {
    path: "/repository",
    name: "Others",
    exact: false,
  },
  {
    path: "/settings",
    name: "Others",
    exact: false,
  },
];
const guestRoutes = [
  {
    component: Login,
    path: "/",
    exact: true,
  },
];
export { guestRoutes, protectedRoutes, publicRoutes };
