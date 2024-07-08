import React, { useReducer, useState } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import zhCN from 'antd/locale/zh_CN';

import { getInitialThemeState, getAlgorithm, themeReducer } from "@/theme/themeSettings";
import { getInitialLayoutMode, setLayoutMode } from "@/theme/layoutSettings";
import { AppContext } from "@/stores/AppContext";
import Router from "@/router/index";

// 设置默认指示符
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 36 }} spin />);

export const App = () => {
  // 主题颜色切换
  const [themeState, dispatch] = useReducer(themeReducer, getInitialThemeState());
  // 布局切换
  const [layoutMode, setLayoutModeState] = useState(getInitialLayoutMode());
  return (
    <AppContext.Provider
      value={{
        setTheme: dispatch,
        layoutMode: layoutMode,
        setLayoutMode: (mode) => setLayoutMode(mode, setLayoutModeState)
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgMask: 'rgba(0, 0, 0, 0.02)',
            screenXXL: 2000,
            screenXXLMin: 2000,
            screenXLMax: 1999,
            screenXLMin: 1350,
            screenXL: 1350,
            screenLGMax: 1349,
            screenLGMin: 1050,
            screenLG: 1050,
            screenMDMax: 1049,
          },
          algorithm: getAlgorithm(themeState.algorithm),
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
            }
          },
          cssVar: {
            key: 'my-var-css'
          },
          hashed: false
        }}
        componentSize={themeState.componentSize}
        locale={zhCN}
      >
        <Router />
      </ConfigProvider>
    </AppContext.Provider>
  );
};