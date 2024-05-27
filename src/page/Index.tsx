import React, { useEffect, useLayoutEffect,  useState } from 'react';
import { Outlet, useLocation } from "react-router-dom"
import { Layout } from 'antd';
import BaseHeader from "@/layouts/components/BaseHeader";
import { BashIndexSkeleton } from "@/layouts/components/Skeleton";
import { router } from "@/router/index";
import { menuArrayToTreeMap } from "@/router/generate";
import request from "@/common/request";

import './Index.css'

// 获取菜单创建路由
const App = () => {
  const location = useLocation();
  useEffect(() => {

  }, [])

  const [loading, setLoading] = useState(true)
  const [topMenuItem, setTopMenuItem] = useState([])

  useLayoutEffect(() => {
    (async () => {
      // 获取菜单
      const menuList = await request.get('/api/user/getMenu');
      // 生成菜单及路由
      const { topMenuTree, routeTree,  menuTree} = menuArrayToTreeMap(menuList);
      console.log('routeTree')
      console.log(routeTree)

      console.log('menuTree')
      console.log(menuTree)
      // 填充动态啊路由
      router.routes[0].children = routeTree
      // 跳转对应路由
      router.navigate(`${location.pathname}`, { replace: true });
      setTimeout(() => {
        // 设置顶部菜单
        setTopMenuItem(topMenuTree)
        setLoading(false)
        // 适当延迟过度效果
      }, 300);
    })();
  }, [])

  return (
    <Layout>
      <BaseHeader topMenuItem={topMenuItem} />
      <BashIndexSkeleton loading={loading}>
        <Outlet />
      </BashIndexSkeleton>
    </Layout>
  );
};
export default App;