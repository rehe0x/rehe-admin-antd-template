import { createBrowserRouter,RouterProvider } from "react-router-dom"

import Login from "@/page/login/Login";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => ({
      Component: ((await import('@/page/Index')).default),
    }),
    // element: pathToLazyComponent('/page/Index.tsx',false),
    children:[
      // {
      //   path: "/*/*",
      //   lazy: async () => ({
      //     Component: ((await import('@/layouts/DefaultLayout')).default),
      //   }),
      //   children: [
      //     {
      //       path:"",
      //       lazy: async () => ({
      //         Component: ((await import('@/page/main/Dashboard')).default),
      //       }),
      //     },
      //     // {
      //     //   id: '33',
      //     //   path: "/*/login11",
      //     //   element: <Login />,
      //     //   // lazy: async () => ({
      //     //   //   Component: ((await import('@/page/Login')).default),
      //     //   // }),
      //     // },
      //     {
      //       path:"/*/*/user",
      //       lazy: async () => ({
      //         Component: ((await import(`@/page/main/user/List`)).default),
      //       }),
      //       loader: () => ({title:['系统管理','用户管理']})
            
      //     },
      //     {
      //       path:"/*/*/menu",
      //       lazy: async () => ({
      //         Component: ((await import('@/page/main/menu/List')).default),
      //       }),
      //       loader: () => ({title:['系统管理','菜单管理']})
      //     }
      //   ]
      // },
      // {
      //   path: "sb/*",
      //   lazy: async () => ({
      //     Component: ((await import('@/page/sb/Dashboard')).default),
      //   }),
      // },
      // {
      //   path: "data/*",
      //   lazy: async () => ({
      //     Component: ((await import('@/layouts/TwoLayout')).default),
      //   }),
      //   children:[
      //     {
      //       path:"",
      //       lazy: async () => ({
      //         Component: ((await import('@/page/data/Dashboard')).default),
      //       }),
      //     },
      //     {
      //       path:"dd1",
      //       lazy: async () => ({
      //         Component: ((await import('@/page/data/Dashboard')).default),
      //       }),
      //     },
      //   ]
      // },
    ]
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/*",
  //   element: <NoPage />,
  // },
  
]);


const Router = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router