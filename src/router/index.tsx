import { createBrowserRouter,NonIndexRouteObject } from "react-router-dom"
export interface myRouteObj extends NonIndexRouteObject {
  title?: string;
}
import Login from "@/page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: ((await import('@/page/Index')).default),
    }),
    children:[
      {
        path: "/",
        lazy: async () => ({
          Component: ((await import('@/layouts/DefaultLayout')).default),
        }),
        children: [
          {
            path:"",
            lazy: async () => ({
              Component: ((await import('@/page/main/Dashboard')).default),
            }),
          },
          {
            path:"/user",
            lazy: async () => ({
              Component: ((await import('@/page/main/user/List')).default),
            }),
            loader: () => ({title:['系统管理','用户管理']})
            
          },
          {
            path:"/menu",
            lazy: async () => ({
              Component: ((await import('@/page/main/menu/List')).default),
            }),
            loader: () => ({title:['系统管理','菜单管理']})
          }
        ]
      },
      {
        path: "sb",
        lazy: async () => ({
          Component: ((await import('@/page/sb/Dashboard')).default),
        }),
      },
      {
        path: "data",
        lazy: async () => ({
          Component: ((await import('@/page/data/Dashboard')).default),
        }),
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);