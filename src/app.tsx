import React, { useReducer } from 'react'
import { ConfigProvider,MappingAlgorithm } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import ThemeCustom from "@/theme/index";
import { AppContext } from "@/stores/AppContext";

import Router from "@/router/index";
import storage from "@/common/storage";

export const App = () => {
  const themeState = {
    algorithm: 'light',
    componentSize: 'middle'
  }
  const themeConfig:{algorithm:string,componentSize:string} = storage.getStorage('themeConfig')
  if (themeConfig){
    themeState.algorithm = themeConfig.algorithm
    themeState.componentSize = themeConfig.componentSize
  } 
 
  const getAlgorithm = (action: string) : MappingAlgorithm => {
    switch (action) {
      case 'light':
        return ThemeCustom.CustomDefaultAlgorithm
      case 'dark':
        return ThemeCustom.CustomDarkAlgorithm
      default:
        return ThemeCustom.CustomDefaultAlgorithm
    }
  }

  const reducer = (state, action) => {
    if(action === 'light' || action === 'dark'){
      state.algorithm = action
    } else {
      state.componentSize = action
    }
   
    storage.setStorage('themeConfig',JSON.stringify(state))
    return { ...state }
  }

  const [state, dispatch] = useReducer(reducer, themeState);

  return (
    <AppContext.Provider
      value={{
        setTheme: dispatch
      }}
    >
      <ConfigProvider
        theme={{
          token: {
          },
          algorithm: getAlgorithm(state.algorithm),
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
              // itemMarginInline:12
            }
          },
          cssVar: true
        }}
        componentSize={state.componentSize}
        locale={zhCN}
      >
        <Router />
      </ConfigProvider>
    </AppContext.Provider>
  );
}

