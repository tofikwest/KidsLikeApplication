import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Главная",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage/HomePage")),
  },
  {
    name: "Планирование",
    path: "/planning",
    exact: true,
    component: lazy(() => import("../pages/PlanningPage/PlanningPage")),
  },

  {
    name: "Награды",
    path: "/awards",
    exact: true,
    component: lazy(() => import("../pages/AwardsPage/AwardsPage")),
  },
  {
    name: "Контакты",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/ContactsPage/ContactsPage")),
  },
  {
    name: "Авторизация",
    path: "/auth",
    exact: true,
    component: lazy(() => import("../pages/AuthPage/AuthPage")),
  },
];
