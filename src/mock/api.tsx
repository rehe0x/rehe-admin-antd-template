import qs from 'qs';
import fetchMock from 'fetch-mock'
fetchMock.config.fallbackToNetwork = true;

/**
 * 获取菜单
 */
fetchMock.get('begin:/api/user/getMenu', (url, opts) => {
  const queryParams = qs.parse(url.split('?')[1])
  console.log('Query params:', queryParams);

  const menuList = [
    {
      id: 1,
      parentId: 0,
      type: 1,
      title: '/',
      component: '/layouts/DefaultLayout',
      routePath: '/',
    },
    {
      id: 5,
      parentId: 1,
      type: 1,
      title: 'Dashboard',
      component: '/page/main/Dashboard',
      routePath: '',
    },
    {
      id: 6,
      parentId: 1,
      type: 0,
      title: '系统管理',
      component: null,
      routePath: 'system',
    },
    {
      id: 61,
      parentId: 6,
      type: 1,
      title: '用户管理',
      component: '/page/main/user/List',
      routePath: 'user',
    },
    {
      id: 62,
      parentId: 6,
      type: 1,
      title: '菜单权限',
      component: '/page/main/menu/List',
      routePath: 'menu',
    },
    {
      id: 63,
      parentId: 6,
      type: 1,
      title: '角色管理',
      component: '/page/main/role/List',
      routePath: 'role',
    },
    {
      id: 64,
      parentId: 6,
      type: 1,
      title: '部门管理',
      component: '/page/main/dept/List',
      routePath: 'dept',
    },


    {
      id: 90,
      parentId: 1,
      type: 0,
      title: '多级菜单',
      component: null,
      routePath: 'page',
    },

    {
      id: 901,
      parentId: 90,
      type: 0,
      title: '二级目录',
      component: null,
      routePath: 'page2',
    },

    {
      id: 9011,
      parentId: 901,
      type: 1,
      title: '三级菜单',
      component: '/page/main/test/3',
      routePath: 'page3',
    },

    {
      id: 9012,
      parentId: 90,
      type: 1,
      title: '二级菜单',
      component: '/page/main/test/2',
      routePath: 'page22',
    },
    {
      id: 100,
      parentId: 1,
      type: 1,
      title: '一级菜单',
      component: '/page/main/test/1',
      routePath: 'page11',
    },
    {
      id: 2,
      parentId: 0,
      type: 1,
      title: '图表',
      component: '/layouts/TwoLayout',
      routePath: 'data',
    },
    {
      id: 400,
      parentId: 2,
      type: 1,
      title: 'Dashboard',
      component: '/page/data/Dashboard',
      routePath: '',
    },

    {
      id: 4000,
      parentId: 2,
      type: 1,
      title: '图表2',
      component: '/page/data/1',
      routePath: 'page1',
    },

    {
      id: 401,
      parentId: 2,
      type: 0,
      title: '多级',
      component: null,
      routePath: 'page2',
    },

    {
      id: 402,
      parentId: 401,
      type: 1,
      title: '图表3',
      component: '/page/data/3',
      routePath: 'p3',
    },
    {
      id: 403,
      parentId: 401,
      type: 1,
      title: '图表4',
      component: '/page/data/4',
      routePath: 'p4',
    },

    {
      id: 3,
      parentId: 0,
      type: 1,
      title: '随便',
      component: '/page/sb/Dashboard',
      routePath: 'sb',
    },

    {
      id: 1000,
      parentId: 0,
      type: 0,
      title: '菜单',
      component: null,
      routePath: 'menu',
    },
    {
      id: 10001,
      parentId: 1000,
      type: 1,
      title: 'Dashboard',
      component: '/page/menu/1',
      routePath: 'dashboard',
    },
    {
      id: 10002,
      parentId: 1000,
      type: 0,
      title: '二级目录',
      component: null,
      routePath: 'page',
    },
    {
      id: 4722,
      parentId: 10002,
      type: 1,
      title: '三级菜单2',
      component: '/page/menu/2',
      routePath: 'page32',
    },
    {
      id: 4833,
      parentId: 10002,
      type: 1,
      title: '三级菜单3',
      component: '/page/menu/3',
      routePath: 'page33',
    }


  ]

  const topMenuItem = [
    {
      key: '/',
      label: `/`
    },
    {
      key: 'data',
      label: `图表`
    },
    {
      key: 'sb',
      label: `随便`
    }
  ]



  return menuList
}, { delay:500 })
