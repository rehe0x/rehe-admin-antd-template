import React, { useState } from 'react';
import { useNavigate,useMatches } from "react-router-dom";
import type { MenuProps } from 'antd';
import { ConfigProvider } from 'antd';
import NProgress from '@/components/NProgress';
import { Menu } from 'antd';

const App: React.FC = (props) => {
  const navigate = useNavigate()
  const routerClick: MenuProps['onClick'] = (e) => {
    NProgress.start();
    window.setTimeout(() => {
      NProgress.done();
    }, 500);
    navigate(e.key)
  };

  // 默认选中菜单
  const matches = useMatches();
  const { data,pathname } = matches.at(-1)

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            algorithm: true,
            horizontalItemHoverBg: 'var(--ant-menu-item-hover-bg)',
            horizontalItemSelectedBg: 'var(--ant-menu-item-hover-bg)',
            horizontalItemBorderRadius: 8,
            itemBg: '',
          }
        },
      }}
    >
      <Menu style={{
        lineHeight: '32px',
        // flex: 1,
        minWidth: 0,
        borderBottom: 0,
        // fontWeight: 'bold'
      }}
        onClick={routerClick} selectedKeys={[pathname]} mode="horizontal" items={props.menus} />
    </ConfigProvider>
  )
};

export default App;