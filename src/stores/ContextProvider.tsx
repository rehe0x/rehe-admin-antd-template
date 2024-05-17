import { createContext }  from 'react';

export const AppConfigContext = createContext({
  theme: '',
  componentSize: '',
  // setTheme: (a:object,b:string) => {console.log(a,b);return;}
});
