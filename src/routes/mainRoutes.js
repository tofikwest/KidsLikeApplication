import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Главная",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage/HomePage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "Планирование",
    path: "/planning",
    exact: true,
    component: lazy(() => import("../pages/PlanningPage/PlanningPage")),
    isPrivat: true,
    restricted: false,
  },

  {
    name: "Награды",
    path: "/awards",
    exact: true,
    component: lazy(() => import("../pages/AwardsPage/AwardsPage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "Авторизация",
    path: "/auth",
    exact: true,
    component: lazy(() => import("../pages/AuthPage/AuthPage")),
    isPrivat: false,
    restricted: true,
  },
  {
    name: "Контакты",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/ContactsPage/ContactsPage")),
    isPrivat: false,
    restricted: false,
  },
];
