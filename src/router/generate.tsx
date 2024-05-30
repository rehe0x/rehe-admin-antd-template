import React,{lazy, Suspense} from 'react';
import { Spin } from "antd";
import * as icons from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

export const layout_modules = import.meta.glob('@/layouts/*.tsx');
export const page_modules = import.meta.glob('@/pages/**/*.tsx');
export const modules = {...layout_modules,...page_modules}

export const pathToLazyComponent  =  (filePaht: string,spin?: boolean) => {
  const path = modules[`/src${filePaht}`] as any;
  if (!path){
    return (
      <div>error</div>
     );
  }
  const Components = lazy(path);

//   // 异步加载的组件
// const Components = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(path);
//     }, 100000); // 延时3秒
//   });
// });

  // if (spin == false){
  //   return (
  //       <LazyComponent />
  //   );
  // }
  return (
    <Suspense fallback={ 
      <Spin spinning={true} className='lazy-spin'  
      fullscreen style={{marginTop: '55px'}} 
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 36,
            bottom: '100px'
          }}
          spin
        />
      }
    />}>
      <Components />
    </Suspense>
  );
}

// 获取菜单root节点
function findMenuRoot(nodeMap, parentId, path) {
  const node = nodeMap.get(parentId)
  if (node.parentId === 0) {
    return { rootNode: node, path }
  } else {
    path =  node.routePath + '/' + path 
  }
  return findMenuRoot(nodeMap, node.parentId, path)
}

// 菜单转路由对象 path 特殊处理  loader 对应菜单
function menuToRouteObject(menu, children) {
  const route = {
    id: menu.id,
    element: pathToLazyComponent(menu.component + '.tsx', true),
    children: children,
    loader: () => menu.parentId === 0 && menu.type === 1 
    ? { menus: menu.children } 
    : { parentPaths: menu.parentPaths, title: [...menu.parentTitle,menu.label] } 
  }
  return route;
}


// 后台扁平化菜单生成树菜单和路由
export function menuArrayToTreeMap(menus) {
  const map = new Map(menus.map((node) => [node.id, {
    ...node,
    // 菜单需要字段
    key: node.routePath,
    label: node.title,
    children: null,
    icon: node.icon && icons[node.icon] ?  React.createElement(icons[node.icon]) : null,
    parentPaths: [],
    parentTitle: []
  }]));

  const menuTree = [];
  const routesMap = new Map();

  // 生成菜单树 
  map.forEach(node => {  
    // key作为路由地址 规则 根菜单path+...子菜单path
    if (!node.hidden ||  node.hidden !== 1) {
      if (node.parentId === 0) {
        node.key = node.key === '/' ? "" : "/" + node.key;
        menuTree.push(node);
      } else {
        const parent = map.get(node.parentId);
        node.key =  parent.key + "/" + node.key;
        
        (parent.children || (parent.children = [])).push(node);
         node.parentPaths = [...parent.parentPaths,parent.key]
         node.parentTitle = [...parent.parentTitle,parent.label]
      }
  
    }
   

    // 生成路由 最多两级（目录不生成路由）
    // 一级菜单如果是目录下面的所有子菜单路由会放在一级 路由地址不需要特殊处理
    // 一级菜单 “/” 路由需要转换为 “/*” 下面的子路由需要加上 “/*”前缀 如 /*/system/user 
    // 一级菜单非 “/” 路由 需要加上“/*” 后缀 如 /data/* 下面的子路由不需要  如 /data/p1/p2
    // 先这样
    if (node.type !== 1) return;  // 跳过非路由菜单

    const routeObj = menuToRouteObject(node, [])
    if (node.parentId === 0) {
      routeObj.path = node.routePath === '/' ? '/*' : node.routePath + `/*`
      routesMap.set(routeObj.id, routeObj)
    } else {
      const { rootNode, path } = findMenuRoot(map, node.parentId, '')
      if (rootNode.type === 1) {
        routeObj.path = rootNode.routePath === '/' ? '/*/' + path  + node.routePath : path  + node.routePath;
        const route = routesMap.get(rootNode.id);
        if (route) {
          route.children.push(routeObj)
        } else {
          const rootRouteObj = menuToRouteObject(rootNode, [routeObj])
          rootRouteObj.path = rootNode.routePath === '/' ? '/*' : rootNode.routePath + `/*`;
          routesMap.set(rootRouteObj.id, rootRouteObj)
        }
      } else {
        routeObj.path = rootNode.routePath === '/' 
          ? rootNode.routePath + '*/' +path  + node.routePath 
          : rootNode.routePath + '/' +path  + node.routePath
        routesMap.set(routeObj.id, routeObj)
      }
    }
  });

  // 生成顶部菜单
  const topMenuTree = menuTree.map(element => ({
    ...element,
    children: element.type === 0 ? element.children : null,
  }));

  return { topMenuTree, menuTree, routeTree: Array.from(routesMap.values()) };
}
