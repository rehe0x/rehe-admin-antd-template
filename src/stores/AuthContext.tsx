import { createContext,useContext }  from 'react';
type AuthContextType = {
  permissions:string[],
  username:string
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) { // 必须保证context对象存在
    throw new Error("useAuth必须在AuthContext中使用");
  }
  return context;
};

