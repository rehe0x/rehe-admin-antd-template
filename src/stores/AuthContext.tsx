import { createContext,useContext }  from 'react';

// export interface UserMenu {
//   id: number;
//   parentId: number;
//   title: string;
//   icon?: string;
//   type: number;
//   routePath: string;
//   component: string;
//   children:[]
// }

// export interface User {
//   id: number;
//   userName: string;
//   nickName: string;
//   phoneNumber: string;
//   email: string;
//   avatar?: any;
//   menus: UserMenu[];
//   routes: any[];
//   flatMenus: UserMenu[];
//   avatarPath: string;
//   authList: string[];
// }

export const AuthContext = createContext({
  permissions:[]
})
// 更改Context名称

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context)
  if (!context) { // 必须保证context对象存在
    throw new Error("useAuth必须在AuthContext中使用");
  }
  return context;
};

