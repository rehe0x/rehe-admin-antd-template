import React, { lazy, Suspense, ReactElement } from 'react';
import { Spin } from "antd";
import * as icons from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

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
}

export interface MenuObject {
  key: string;
  label: string;
  children: MenuObject[] | null;
  icon: ReactElement | null;
  menu_type: number;
  parent_paths: string[];
  parent_title: string[];
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
const layout_modules = import.meta.glob('@/layouts/*.tsx');
const page_modules = import.meta.glob('@/pages/**/*.tsx');
const modules = { ...layout_modules, ...page_modules };
function pathToLazyComponent(filePath: string): ReactElement {
  const path = modules[`/src${filePath}`] as any;
  if (!path) {
    return <div>error</div>;
  }
  const Component = lazy(path);
  return (
    <Suspense
      fallback={
        <Spin
          spinning={true}
          className='lazy-spin'
          fullscreen
          style={{ marginTop: '55px' }}
          indicator={
            <LoadingOutlined
              style={{ fontSize: 36, bottom: '100px' }}
              spin
            />
          }
        />
      }
    >
      <Component />
    </Suspense>
  );
};

// 获取菜单root节点
function findMenuRoot(nodeMap: Map<number, Menu>, parentId: number, path: string)
: { rootNode: Menu, path: string } {
  const node = nodeMap.get(parentId);
  if(!node){
    throw new Error("菜单数据异常！");
  }
  if (node.parentId === 0) {
    return { rootNode: node, path };
  }
  return findMenuRoot(nodeMap, node.parentId, `${node.routePath}/${path}`);
}

// 菜单转路由对象
function menuToRouteObject(node: Menu, children: RouteObject[], menuObject: MenuObject): RouteObject {
  return {
    id: node.id,
    element: pathToLazyComponent(node.component + '.tsx'),
    children,
    loader: () => node.parentId === 0 && node.menuType === 1 
      ? { menus: menuObject.children } 
      : { parentPaths: menuObject.parent_paths, title: [...menuObject.parent_title, menuObject.label] }
  };
}

// 菜单转对象
function menuToMenuObject(node: Menu): MenuObject {
  return {
    key: node.routePath,
    label: node.title,
    children: null,
    icon: node.icon && icons[node.icon] ? React.createElement(icons[node.icon]) : null,
    menu_type: node.menuType,
    parent_paths: [],
    parent_title: []
  };
}

/**
 * 后台扁平化菜单生成树菜单和路由和权限
 */
export function menuArrayToTreeMap(menus: Menu[])
  : { topMenuTree: MenuObject[], menuTree: MenuObject[], routeTree: RouteObject[], permissions: string[] } {
  
  const menuMap:Map<number, Menu> = new Map(menus.map((node) => [node.id, node]));
  const menuObjectMap:Map<number, MenuObject> = new Map(menus.map((node) => [node.id, menuToMenuObject(node)]));
  
  const permissions: string[] = [];
  const menuTree: MenuObject[] = [];
  const routesMap = new Map<number, RouteObject>();

  menuMap.forEach((node) => {
    // 生成菜单树结构 排除权限和隐藏
    if (node.menuType !== 2 && (!node.hidden || node.hidden !== 1)) {
      const menuObject = menuObjectMap.get(node.id)!;
      if (node.parentId === 0) {
        menuObject.key = menuObject.key === '/' ? "" : "/" + menuObject.key;
        menuTree.push(menuObject);
      } else {
        const parent = menuObjectMap.get(node.parentId)!;
        menuObject.key = parent.key + "/" + menuObject.key;
        (parent.children || (parent.children = [])).push(menuObject);
        menuObject.parent_paths = [...parent.parent_paths, parent.key];
        menuObject.parent_title = [...parent.parent_title, parent.label];
      }
    }

    // 生成权限
    if (node.menuType === 2 && node.permission) {
      permissions.push(node.permission);
    }

    // 生成路由 最多两级（目录不生成路由）
    if (node.menuType !== 1) return;
    const routeObj = menuToRouteObject(node, [], menuObjectMap.get(node.id)!);
    if (node.parentId === 0) {
      routeObj.path = node.routePath === '/' ? '/*' : node.routePath + `/*`;
      routesMap.set(routeObj.id, routeObj);
    } else {
      const { rootNode, path } = findMenuRoot(menuMap, node.parentId, '');
      if (rootNode.menuType === 1) {
        routeObj.path = rootNode.routePath === '/' ? '/*/' + path + node.routePath : path + node.routePath;
        const route = routesMap.get(rootNode.id);
        if (route) {
          route.children.push(routeObj);
        } else {
          const rootRouteObj = menuToRouteObject(rootNode, [routeObj], menuObjectMap.get(rootNode.id)!);
          rootRouteObj.path = rootNode.routePath === '/' ? '/*' : rootNode.routePath + `/*`;
          routesMap.set(rootRouteObj.id, rootRouteObj);
        }
      } else {
        routeObj.path = rootNode.routePath === '/'
          ? rootNode.routePath + '*/' + path + node.routePath
          : rootNode.routePath + '/' + path + node.routePath;
        routesMap.set(routeObj.id, routeObj);
      }
    }
  });

  // 生成顶部菜单
  const topMenuTree = menuTree.map(element => ({
    ...element,
    children: element.menu_type === 0 ? element.children : null,
  }));

  return { topMenuTree, menuTree, routeTree: Array.from(routesMap.values()), permissions };
}