import { createContext,useContext }  from 'react';


export interface UserMenu {
  id: number;
  parentId: number;
  title: string;
  icon?: string;
  type: number;
  routePath: string;
  component: string;
  children:[]
}

export interface User {
  id: number;
  userName: string;
  nickName: string;
  phoneNumber: string;
  email: string;
  avatar?: any;
  menus: UserMenu[];
  routes: any[];
  flatMenus: UserMenu[];
  avatarPath: string;
  authList: string[];
}

const AuthContext1 = createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
// 更改Context名称
AuthContext.displayName = "AuthContext";

export const AuthContext = createContext({
  theme: '',
  componentSize: '',
  // setTheme: (a:object,b:string) => {console.log(a,b);return;}
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) { // 必须保证context对象存在
    throw new Error("useApp必须在AppContext中使用");
  }
  return context;
};

