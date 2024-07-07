import { createContext,useContext }  from 'react';

type AppContextType = {
  theme?: string;
  componentSize?: string;
  setTheme: (theme: string) => void;
  layoutMode: number | undefined;
  setLayoutMode: (mode: string) => void;
};

export const AppContext = createContext<AppContextType>({
  theme: '',
  componentSize: '',
  setTheme: () => {},
  layoutMode: undefined,
  setLayoutMode: () => {},
});

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) { // 必须保证context对象存在
    throw new Error("useApp必须在AppContext中使用");
  }
  return context;
};