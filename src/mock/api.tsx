import qs from 'qs';
import fetchMock from 'fetch-mock'
fetchMock.config.fallbackToNetwork = true;

/**
 * 获取菜单默认布局
 */
fetchMock.get('/api/user/getMenu', (url, opts) => {
  const queryParams = qs.parse(url.split('?')[1])
  console.log('Query params:', queryParams);

  const menuList = [
    
    {
      id: 122222,
      parentId: 0,
      menuType: 2,
      title: null,
      component: null,
      routePath: null,
      icon: '',
      permission: 'user:add'
    },

    {
      id: 1,
      parentId: 0,
      menuType: 1,
      title: '/',
      component: '/layouts/DefaultLayout',
      routePath: '',
      icon: ''
    },

    {
      id: 401302,
      parentId: 0,
      menuType: 1,
      title: '404',
      component: '/pages/404',
      routePath: '/*',
      hidden: 1
    },

    {
      id: 5,
      parentId: 1,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/main/Dashboard',
      routePath: '',
      icon: 'HomeOutlined'
    },
    {
      id: 6,
      parentId: 1,
      menuType: 0,
      title: '系统管理',
      component: null,
      routePath: 'system',
      icon: 'SettingOutlined'
    },
    {
      id: 61,
      parentId: 6,
      menuType: 1,
      title: '用户管理',
      component: '/pages/main/user/Index',
      routePath: 'user',
    },
    {
      id: 62,
      parentId: 6,
      menuType: 1,
      title: '菜单权限',
      component: '/pages/main/menu/Index',
      routePath: 'menu',
    },
    {
      id: 63,
      parentId: 6,
      menuType: 1,
      title: '角色管理',
      component: '/pages/main/role/Index',
      routePath: 'role',
    },
    {
      id: 64,
      parentId: 6,
      menuType: 1,
      title: '部门管理',
      component: '/pages/main/dept/Index',
      routePath: 'dept',
    },


    {
      id: 90,
      parentId: 1,
      menuType: 0,
      title: '多级菜单',
      component: null,
      routePath: 'page',
      icon: 'MenuOutlined'

    },

    {
      id: 901,
      parentId: 90,
      menuType: 0,
      title: '二级目录',
      component: null,
      routePath: 'page2',

    },

    {
      id: 9011,
      parentId: 901,
      menuType: 1,
      title: '三级菜单',
      component: '/pages/main/test/3',
      routePath: 'page3',
    },

    {
      id: 9012,
      parentId: 90,
      menuType: 1,
      title: '二级菜单',
      component: '/pages/main/test/2',
      routePath: 'page22',
    },
    {
      id: 100,
      parentId: 1,
      menuType: 1,
      title: '一级菜单',
      component: '/pages/main/test/1',
      routePath: 'page11',
      icon: 'MenuOutlined'

    },
    {
      id: 2,
      parentId: 0,
      menuType: 1,
      title: '图表',
      component: '/layouts/TwoLayout',
      routePath: 'data',
    },
    {
      id: 400,
      parentId: 2,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/data/Dashboard',
      routePath: '',
    },

    {
      id: 40130,
      parentId: 2,
      menuType: 1,
      title: '404',
      component: '/pages/404',
      routePath: '*',
      hidden: 1
    },

    {
      id: 4000,
      parentId: 2,
      menuType: 1,
      title: '图表2',
      component: '/pages/data/1',
      routePath: 'page1',
    },

    {
      id: 401,
      parentId: 2,
      menuType: 0,
      title: '多级',
      component: null,
      routePath: 'page2',
    },

    {
      id: 402,
      parentId: 401,
      menuType: 1,
      title: '图表3',
      component: '/pages/data/3',
      routePath: 'p3',
    },
    {
      id: 403,
      parentId: 401,
      menuType: 1,
      title: '图表4',
      component: '/pages/data/4',
      routePath: 'p4',
    },

    {
      id: 3,
      parentId: 0,
      menuType: 1,
      title: '随便',
      component: '/pages/sb/Dashboard',
      routePath: 'sb',
    },

    {
      id: 1000,
      parentId: 0,
      menuType: 0,
      title: '菜单',
      component: null,
      routePath: 'menu',
    },
    {
      id: 10001,
      parentId: 1000,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/menu/1',
      routePath: 'dashboard',
    },
    {
      id: 10002,
      parentId: 1000,
      menuType: 0,
      title: '二级目录',
      component: null,
      routePath: 'page',
    },
    {
      id: 4722,
      parentId: 10002,
      menuType: 1,
      title: '三级菜单2',
      component: '/pages/menu/2',
      routePath: 'page32',
    },
    {
      id: 4833,
      parentId: 10002,
      menuType: 1,
      title: '三级菜单3',
      component: '/pages/menu/3',
      routePath: 'page33',
    }
  ]
  return {data: menuList,}
}, { delay:500 })



/**
 * 获取菜单Top
 */
fetchMock.get('/api/user/getMenuTop', (url, opts) => {
  const queryParams = qs.parse(url.split('?')[1])
  console.log('Query params:', queryParams);

  const menuList = [
    {
      id: 1,
      parentId: 0,
      menuType: 0,
      title: '首页',
      component: null,
      routePath: '',
      icon: ''
    },

    
    {
      id: 5,
      parentId: 1,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/main/Dashboard',
      routePath: '',
      icon: 'HomeOutlined'
    },
    {
      id: 6,
      parentId: 1,
      menuType: 0,
      title: '系统管理',
      component: null,
      routePath: 'system',
      icon: 'SettingOutlined'
    },
    {
      id: 61,
      parentId: 6,
      menuType: 1,
      title: '用户管理',
      component: '/pages/main/user/Index',
      routePath: 'user',
    },
    {
      id: 62,
      parentId: 6,
      menuType: 1,
      title: '菜单权限',
      component: '/pages/main/menu/Index',
      routePath: 'menu',
    },
    {
      id: 63,
      parentId: 6,
      menuType: 1,
      title: '角色管理',
      component: '/pages/main/role/Index',
      routePath: 'role',
    },
    {
      id: 64,
      parentId: 6,
      menuType: 1,
      title: '部门管理',
      component: '/pages/main/dept/Index',
      routePath: 'dept',
    },


    {
      id: 90,
      parentId: 1,
      menuType: 0,
      title: '多级菜单',
      component: null,
      routePath: 'page',
      icon: 'MenuOutlined'

    },

    {
      id: 901,
      parentId: 90,
      menuType: 0,
      title: '二级目录',
      component: null,
      routePath: 'page2',

    },

    {
      id: 9011,
      parentId: 901,
      menuType: 1,
      title: '三级菜单',
      component: '/pages/main/test/3',
      routePath: 'page3',
    },

    {
      id: 9012,
      parentId: 90,
      menuType: 1,
      title: '二级菜单',
      component: '/pages/main/test/2',
      routePath: 'page22',
    },
    {
      id: 100,
      parentId: 1,
      menuType: 1,
      title: '一级菜单',
      component: '/pages/main/test/1',
      routePath: 'page11',
      icon: 'MenuOutlined'

    },
    {
      id: 2,
      parentId: 0,
      menuType: 1,
      title: '图表',
      component: '/layouts/TwoLayout',
      routePath: 'data',
    },
    {
      id: 400,
      parentId: 2,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/data/Dashboard',
      routePath: '',
    },

   

    {
      id: 4000,
      parentId: 2,
      menuType: 1,
      title: '图表2',
      component: '/pages/data/1',
      routePath: 'page1',
    },

    {
      id: 401,
      parentId: 2,
      menuType: 0,
      title: '多级',
      component: null,
      routePath: 'page2',
    },

    {
      id: 402,
      parentId: 401,
      menuType: 1,
      title: '图表3',
      component: '/pages/data/3',
      routePath: 'p3',
    },
    {
      id: 403,
      parentId: 401,
      menuType: 1,
      title: '图表4',
      component: '/pages/data/4',
      routePath: 'p4',
    },

    {
      id: 3,
      parentId: 0,
      menuType: 1,
      title: '随便',
      component: '/pages/sb/Dashboard',
      routePath: 'sb',
    },

    {
      id: 1000,
      parentId: 0,
      menuType: 0,
      title: '菜单',
      component: null,
      routePath: 'menu',
    },
    {
      id: 10001,
      parentId: 1000,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/menu/1',
      routePath: 'dashboard',
    },
    {
      id: 10002,
      parentId: 1000,
      menuType: 0,
      title: '二级目录',
      component: null,
      routePath: 'page',
    },
    {
      id: 4722,
      parentId: 10002,
      menuType: 1,
      title: '三级菜单2',
      component: '/pages/menu/2',
      routePath: 'page32',
    },
    {
      id: 4833,
      parentId: 10002,
      menuType: 1,
      title: '三级菜单3',
      component: '/pages/menu/3',
      routePath: 'page33',
    }
  ]
  return {data: menuList,}
}, { delay:500 })



/**
 * 获取左侧菜单
 */
fetchMock.get('/api/user/getMenuLeft', (url, opts) => {
  const queryParams = qs.parse(url.split('?')[1])
  console.log('Query params:', queryParams);

  const menuList = [
    {
      id: 1,
      parentId: 0,
      menuType: 1,
      title: '首页',
      component: '/layouts/DefaultLayout',
      routePath: '',
      icon: ''
    },


    {
      id: 5,
      parentId: 1,
      menuType: 1,
      title: 'Dashboard',
      component: '/pages/main/Dashboard',
      routePath: '',
      icon: 'HomeOutlined'
    },
    {
      id: 6,
      parentId: 1,
      menuType: 0,
      title: '系统管理',
      component: null,
      routePath: 'system',
      icon: 'SettingOutlined'
    },
    {
      id: 61,
      parentId: 6,
      menuType: 1,
      title: '用户管理',
      component: '/pages/main/user/Index',
      routePath: 'user',
    },
    {
      id: 62,
      parentId: 6,
      menuType: 1,
      title: '菜单权限',
      component: '/pages/main/menu/Index',
      routePath: 'menu',
    },
    {
      id: 63,
      parentId: 6,
      menuType: 1,
      title: '角色管理',
      component: '/pages/main/role/Index',
      routePath: 'role',
    },
    {
      id: 64,
      parentId: 6,
      menuType: 1,
      title: '部门管理',
      component: '/pages/main/dept/Index',
      routePath: 'dept',
    },


    {
      id: 90,
      parentId: 1,
      menuType: 0,
      title: '多级菜单',
      component: null,
      routePath: 'page',
      icon: 'MenuOutlined'

    },

    {
      id: 901,
      parentId: 90,
      menuType: 0,
      title: '二级目录',
      component: null,
      routePath: 'page2',

    },

    {
      id: 9011,
      parentId: 901,
      menuType: 1,
      title: '三级菜单',
      component: '/pages/main/test/3',
      routePath: 'page3',
    },

    {
      id: 9012,
      parentId: 90,
      menuType: 1,
      title: '二级菜单',
      component: '/pages/main/test/2',
      routePath: 'page22',
    },
    {
      id: 100,
      parentId: 1,
      menuType: 1,
      title: '一级菜单',
      component: '/pages/main/test/1',
      routePath: 'page11',
      icon: 'MenuOutlined'

    }
  ]
  return {data: menuList,}
}, { delay:500 })



fetchMock.get('begin:/api/user/info', (url, opts) => {
  const userInfo = {
    id: 1,
    username: '潘西热河',
  }

  return {data: userInfo}
}, { delay:500 })

/**
 * 获取userlist
 */
fetchMock.get('begin:/api/user/list', (url, opts) => {
  const queryParams = qs.parse(url.split('?')[1])
  console.log('Query params:', queryParams);

  const userList = []
  const pageNum = queryParams?.pageNum ? queryParams?.pageNum as number : 1
  const pageSize = queryParams?.pageSize ? queryParams?.pageSize as number : 10
  console.log(pageSize)
  var i = 1;
  while(i<=pageSize){
    userList.push({
      id: i,
      name: '你好'+pageNum,
      age: i,
      address: '撒地方撒地方',
      tags: ['nice', 'developer',i+""],
    })
    i++;
  }

  return {data: userList,total: Math.ceil(Math.random()*900000)}
}, { delay:500 })
