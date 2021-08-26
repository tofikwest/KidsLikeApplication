import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage/HomePage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "planning",
    path: "/planning",
    exact: true,
    component: lazy(() => import("../pages/PlanningPage/PlanningPage")),
    isPrivat: true,
    restricted: false,
  },

  {
    name: "awards",
    path: "/awards",
    exact: true,
    component: lazy(() => import("../pages/AwardsPage/AwardsPage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "authorization",
    path: "/auth",
    exact: true,
    component: lazy(() => import("../pages/AuthPage/AuthPage")),
    isPrivat: false,
    restricted: true,
  },
  {
    name: "contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/ContactsPage/ContactsPage")),
    isPrivat: false,
    restricted: false,
  },
];
