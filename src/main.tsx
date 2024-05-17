import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import ThemeCustom from "@/styles/ThemeCustom";
import { AppConfigContext } from "@/stores/ContextProvider.tsx";

import Index from './page/Index.tsx'

export default function MyApp() {
  const themeState = {
    algorithm: ThemeCustom.CustomDefaultAlgorithm,
    componentSize: 'middle'
  }
  const reducer = (state, action) => {
    switch (action) {
      case 'light':
        return { ...state, algorithm: ThemeCustom.CustomDefaultAlgorithm }
      case 'dark':
        return { ...state, algorithm: ThemeCustom.CustomDarkAlgorithm }
      default:
        return { ...state, componentSize: action }
    }
  }

  const [state, dispatch] = useReducer(reducer, themeState);

  return (
    <AppConfigContext.Provider
      value={{
        setTheme: dispatch
      }}
    >
      <ConfigProvider
        theme={{
          token: {
          },
          algorithm: state.algorithm,
          components: {
            Layout: {
              headerHeight: 55,
              headerBg: 'var(--ant-header-bg)',
              siderBg: 'var(--ant-sider-bg)',
              algorithm: true,
            },
            Menu: {
              algorithm: true,
              activeBarHeight: 0,
              activeBarBorderWidth: 0,
              activeBarWidth: 0,
              itemMarginInline:12
            }
          },
          cssVar: true
        }}
        componentSize={state.componentSize}
        locale={zhCN}
      >
        <Index />
      </ConfigProvider>
    </AppConfigContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
