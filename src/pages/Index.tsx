import React, { useEffect, useLayoutEffect,  useState } from 'react';
import { Outlet, useLocation } from "react-router-dom"
import { Layout } from 'antd';
import BaseHeader from "@/layouts/components/BaseHeader";
import { BashIndexSkeleton } from "@/layouts/components/Skeleton";
import { router } from "@/router/index";
import { menuArrayToTreeMap } from "@/router/generate";
import request from "@/common/request";
import { useApp } from "@/stores/AppContext";
import { AuthContext } from "@/stores/AuthContext";

import('@/styles/TableLayout.css')
// 获取菜单创建路由
const App = () => {
  const { layoutMode } = useApp()
  const location = useLocation();
  const [loading, setLoading] = useState(true)


  const [topMenuItem, setTopMenuItem] = useState([])
  
  const [userInfo, setUserInfo] = useState({
    permissions: [],
    username: ''
  })
 // 获取菜单
  useLayoutEffect(() => {
    (async () => {
      let menuList = []

      let user = {}
      if (layoutMode == 1) {
        const {data:{menus,username}} = await request.get('/api/user/getMenu');
        menuList = menus
        user['username'] = username
      } else if(layoutMode == 2){
        const {data:{menus,username}}  = await request.get('/api/user/getMenuTop');
        menuList = menus
        user['username'] = username
      } else {
        const {data:{menus,username}}  = await request.get('/api/user/getMenuLeft');
        menuList = menus
        user['username'] = username
      }
      // 生成菜单及路由
      const { topMenuTree, routeTree,  menuTree, permissions} = menuArrayToTreeMap(menuList);
      console.log('routeTree')
      console.log(routeTree)

      console.log('menuTree')
      console.log(menuTree)

      console.log('permissions')
      console.log(permissions)
      
      // 填充动态啊路由
      router.routes[0].children = routeTree
      // 跳转对应路由
      router.navigate(`${location.pathname}`, { replace: true });
      // setTimeout(() => {
        // 设置顶部菜单
        setTopMenuItem(topMenuTree)
        setUserInfo({
          permissions: permissions,
          ...user
        })
       
        setLoading(false)
        // 适当延迟过度效果
      // }, 0);
    })();
  }, [layoutMode])

  return (
    <AuthContext.Provider
      value={{...userInfo}}
    >
      <Layout>
        <BaseHeader topMenuItem={topMenuItem} />
        <BashIndexSkeleton loading={loading}>
          <div style={{marginTop: '55px'}}>
            <Outlet />
          </div>
        </BashIndexSkeleton>
      </Layout>
    </AuthContext.Provider>
  );
};
export default App;