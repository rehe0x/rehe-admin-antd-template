
      // // 遍历树菜单生成顶部菜单和所有路由 
      // // 改用扁平化数据生成树 
      // function findNodeMenu(menuList:Array<UserMenu>,menus,routes,topMenus,count){
      //   menuList.forEach((menuItem,index) => {
      //     const isChildren = (menuItem.children && menuItem.children.length>0)
      //     // 所有菜单
      //     menus.push({
      //       key:menuItem.routePath,
      //       label: menuItem.title,
      //       children:isChildren ? []:null
      //     })
          
      //     //顶部菜单
      //     if(menuItem.parentId === 0 || topMenus != null) {
      //       topMenus.push({
      //         key:menuItem.routePath,
      //         label: menuItem.title,
      //         children:isChildren ? []:null
      //       })
      //     } 

      //     // 判断顶层菜单路由 标记 如果顶层菜单是目录 他的子菜单路由放到最外层 打上标记 生成路由时不会前面加前缀
      //     if (menuItem.parentId === 0 && menuItem.type === 0 && menuItem.routePath !== '/'){
      //       count = 1;
      //     //如果顶层菜单是菜单他的字路由需要放到该菜单children下并且 子路由需要加上顶层路由前缀
      //     }else if(menuItem.parentId === 0 && menuItem.type !== 0 && menuItem.routePath === '/'){
      //       count = 2;  
      //     } else{
      //       count = 3
      //     }

      //     // 把目录过滤掉
      //     if (menuItem.type !== 0){
           
      //       let p = ''
      //       if (menuItem.parentId === 0){
      //         p = menuItem.routePath === '/' ? '/*' : menuItem.routePath+`/*`
      //       } else if(count === 2) {
      //         p = `/*`+menuItem.routePath
      //       } else if(count === 1 || count == 3){
      //         p = menuItem.routePath
      //       }
            
      //       routes.push(
      //         {
      //           path: p,
      //           id: menuItem.id,
      //           // Component: DefaultLayout,
      //           element: pathToLazyComponent(menuItem.component+'.tsx',false),
      //           loader: () => {if(menuItem.parentId === 0) return {menus:menus[index].children}},
      //           children:[]
      //         }
      //       )
      //     } 
         

      //     menuItem.parentId === 0 && menuItem.type === 0

      //     if(isChildren){
      //       findNodeMenu(menuItem.children, menus[index].children, 
      //         // 路由特殊处理
      //         // routes[index] === undefined ? routes:routes[index].children,
      //         (menuItem.type === 0) ? routes: routes[index].children,
      //         // 顶部菜单特殊处理
      //         (menuItem.parentId === 0 && menuItem.type === 1) 
      //         || topMenus == null ? null:topMenus[index].children,
      //         count
      //       )
      //     }
            
      //   });
      //   return {menus, routes, topMenus};
      // }

      // const {menus, routes,topMenus} = findNodeMenu(menuList,[],[],[],0);