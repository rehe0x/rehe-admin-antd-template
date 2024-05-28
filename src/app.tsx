import React, { useReducer, useState } from 'react'
import { ConfigProvider,MappingAlgorithm,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import zhCN from 'antd/locale/zh_CN';
import ThemeCustom from "@/theme/index";
import { AppContext } from "@/stores/AppContext";

import Router from "@/router/index";
import storage from "@/common/storage";

// 自定义指示符组件
const customIndicator = (
  <LoadingOutlined style={{ fontSize: 36 }} spin />
);
// 设置默认指示符
Spin.setDefaultIndicator(customIndicator);

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

  const lm = storage.getStorage('layoutMode')
  const [layoutMode, setLayoutMode] = useState(lm?.layoutMode)

  const setLayout = (k)=>{
    setLayoutMode(k)
    storage.setStorage('layoutMode',JSON.stringify({layoutMode: k}))
  }
  return (
    <AppContext.Provider
      value={{
        setTheme: dispatch,
        layoutMode: layoutMode,
        setLayoutMode:setLayout
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgMask: 'rgba(0, 0, 0, 0.02)'
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
          cssVar: {
            key: 'my-var-css'
          },
          hashed: false
        }}
        componentSize={state.componentSize}
        locale={zhCN}
      >
        <Router />
      </ConfigProvider>
    </AppContext.Provider>
  );
}

