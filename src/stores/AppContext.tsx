import { createContext,useContext }  from 'react';

export const AppContext = createContext({
  theme: '',
  componentSize: '',
  // setTheme: (a:object,b:string) => {console.log(a,b);return;}
});

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) { // 必须保证context对象存在
    throw new Error("useApp必须在AppContext中使用");
  }
  return context;
};

