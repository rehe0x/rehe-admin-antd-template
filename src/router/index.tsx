import { createBrowserRouter,RouterProvider,Navigate } from "react-router-dom"

import Login from "@/pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => ({
      Component: ((await import('@/pages/Index')).default),
    }),
    
  },
  {
    path: "/404",
    lazy: async () => ({
      Component: ((await import('@/pages/404/404')).default),
    }),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


const Router = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router