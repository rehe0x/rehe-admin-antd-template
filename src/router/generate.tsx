import React, { lazy, Suspense, ReactElement } from "react";
import { useLocation } from 'react-router-dom';
import { Spin, ConfigProvider } from "antd";
import * as icons from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";

// 类型定义
export interface Menu {
  id: number;
  parentId: number;
  routePath: string;
  title: string;
  component: string;
  icon?: string;
  menuType: number;
  hidden?: number;
  permission?: string;
  children?:Menu[],

  key: string; // 菜单key
  path:string; //路由路由path
  parent_paths: string[]; //路由需要
  parent_title: string[]; // 路由需要
  
}

export interface MenuObject {
  key: string;
  label: string;
  children: MenuObject[] | null;
  icon: ReactElement | null;
  menu_type:number;
}

export interface RouteObject {
  id: number;
  path?: string;
  element: ReactElement;
  children: RouteObject[];
  loader: () => any;
}

/**
 * 组件读取
 */
const layout_modules = import.meta.glob("@/layouts/*.tsx");
const page_modules = import.meta.glob("@/pages/**/*.tsx");
const modules = { ...layout_modules, ...page_modules };

// const LazyComponentWrapper = ({ filePath }) => {
//   const location = useLocation();
//   const path = modules[`/src${filePath}`] as any;
//   const Component = lazy(path);
//   return (
//     <Suspense
//       key={location.pathname} // 使用路由路径作为 key
//       fallback={
//         <ConfigProvider
//           theme={{
//             token: {
//               colorBgMask: "rgba(0, 0, 0, 0.02)",
//             },
//           }}
//         >
//           <Spin
//             spinning={true}
//             className="lazy-spin"
//             fullscreen
//             style={{ marginTop: "55px" }}
//             indicator={
//               <LoadingOutlined style={{ fontSize: 36, bottom: "100px" }} spin />
//             }
//           />
//         </ConfigProvider>
//       }
//     >
//       <Component />
//     </Suspense>
//   );
// };


function pathToLazyComponent(filePath: string): ReactElement {
  const path = modules[`/src${filePath}`] as any;
  if (!path) {
    return <div>error</div>;
  }
  // const Component = lazy(path);

  // 异步加载的组件
  const Component = lazy(() => {
    return new Promise(resolve => 
      setTimeout(resolve, 200)
    ).then(path);
  });

  return (
    <Suspense
      fallback={
        <ConfigProvider
          theme={{
            token: {
              colorBgMask: "rgba(0, 0, 0, 0.02)",
            },
          }}
        >
          <Spin
            spinning={true}
            className="lazy-spin"
            fullscreen
            style={{ marginTop: "55px" }}
            indicator={
              <LoadingOutlined style={{ fontSize: 36, bottom: "100px" }} spin />
            }
          />
        </ConfigProvider>
      }
    >
      <Component />
    </Suspense>
  );
}


// 菜单转路由对象
function menuToRouteObject(
  node: Menu,
  children: RouteObject[],
  loaderData = {}
): RouteObject {
  return {
    id: node.id,
    element: pathToLazyComponent(node.component + ".tsx"),
    // element: <LazyComponentWrapper filePath={node.component + ".tsx"}/>,
    children,
    loader: () => loaderData
  };
}

// 菜单转对象
function menuToMenuObject(node: Menu): MenuObject {
  return {
    key: node.key,
    label: node.title,
    children: null,
    icon:
      node.icon && icons[node.icon]
        ? React.createElement(icons[node.icon])
        : null,
    menu_type: node.menuType
  };
}

/**
 * 后台扁平化菜单生成树菜单和路由和权限
 */
export function menuArrayToTreeMap(menus: Menu[]): {
  topMenuTree: MenuObject[];
  routeTree: RouteObject[];
  permissions: string[];
} {
  const menuMap: Map<number, Menu> = new Map(
    menus.map((node) => [node.id, node])
  );
  //生成原始菜单树 和 权限
  const menuRawTree: Menu[] = [];
  const permissions: string[] = [];
  menuMap.forEach(node => {
    if (node.menuType === 2 && node.permission) {
      permissions.push(node.permission);
      return;
    }
    if (node.parentId === 0) {
      menuRawTree.push(node)
    } else {
      const parentNode = menuMap.get(node.parentId);
      parentNode && (parentNode.children || (parentNode.children = [])).push(node)
    }
  })

  // 生成菜单和路由需要数据
  const menuDataMap: Map<number, Menu> = new Map();
  const initMenuData = (node:Menu,parentMenu?:Menu) => {
    if(node.parentId === 0){
      node.key = node.routePath !== '' ? '/' + node.routePath : node.routePath
      node.path = node.routePath;
      node.parent_paths = [node.key]
      node.parent_title = [node.title]
    } else {
      if(parentMenu){
        //菜单key
        node.key =node.routePath !== '' ? "/" + node.routePath : node.routePath;
        if(parentMenu.key !== ''){
          node.key = parentMenu.key + node.key
        } 
        // 路由特殊处理
        if(parentMenu.path !== '' && node.routePath !== '' && parentMenu.menuType === 0){
          node.path = parentMenu.path +"/"+ node.routePath;
        } else {
          node.path = node.routePath;
        }
        node.parent_paths = [...parentMenu.parent_paths, node.key];
        node.parent_title = [...parentMenu.parent_title, node.title];
      }
    }
    menuDataMap.set(node.id, {...node, children: []})
    if(node.children){
      node.children.forEach(child => initMenuData(child, node))
    }
  }
  menuRawTree.forEach(node => initMenuData(node))

  // 生成菜单MAP树
  const menuTreeMap: Map<number, MenuObject> = new Map();
  const initMenuTree = (node:Menu,parentMenu?:MenuObject) => {
    if(node.hidden){
      return;
    }
    const menuObject = menuToMenuObject(menuDataMap.get(node.id)!)
    if(node.parentId === 0){
      menuTreeMap.set(node.id, menuObject)
    } else {
      if(parentMenu){
        (parentMenu.children || (parentMenu.children = [])).push(menuObject)
      }
    }
    if(node.children){
      node.children.forEach(child => initMenuTree(child, menuObject))
    }
  }
  menuRawTree.forEach(node => initMenuTree(node))


  //生成路由tree
  const routesTreeMap = new Map<number, RouteObject>();
  const initRouteTree = (node:Menu,topNode:Menu) => {
    if(node.menuType === 1){
      if(node.parentId === 0){
        const menuObject = menuTreeMap.get(node.id)!
        const routeObj = menuToRouteObject(node, [], {
          menus: menuObject && menuObject.children
        });
        routeObj.path =  node.path;
        routesTreeMap.set(node.id, routeObj);
      } else {
        const menuData = menuDataMap.get(node.id)!
        const routeObj = menuToRouteObject(node, [],  {
          parentPaths: menuData.parent_paths,
          title: menuData.parent_title,
        });
        routeObj.path =  node.path;
        if(topNode.menuType === 1){
            const route = routesTreeMap.get(topNode.id);
          if (route) {
            route.children.push(routeObj);
          }
        } else {
          routesTreeMap.set(node.id, routeObj);
        }
      }
    }
    if(node.children){
      node.children.forEach(child => initRouteTree(child, topNode))
    }
  }
  menuRawTree.forEach(node => initRouteTree(node,node))

  // 生成顶部菜单
  const topMenuTree = Array.from(menuTreeMap.values()).map((element) => ({
    ...element,
    children: element.menu_type === 0 ? element.children : null,
  }));

  return {
    topMenuTree,
    routeTree: Array.from(routesTreeMap.values()),
    permissions,
  };
}
