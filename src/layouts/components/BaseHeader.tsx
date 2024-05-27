import React, { useState, useEffect } from 'react'
import { useNavigate, useMatches } from "react-router-dom";

import { Layout, Menu, Space, Dropdown, ConfigProvider, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useApp } from "@/stores/AppContext";
import NProgress from '@/components/NProgress';
import { BaseHeaderSkeleton } from "@/layouts/components/Skeleton";
import './Index.css'

const themeItems = [
  {
    key: '1',
    type: 'group',
    label: '颜色模式',
    children: [
      {
        key: 'dark',
        label: '暗黑',
      },
      {
        key: 'light',
        label: '默认',
      },
    ],
  },
  {
    key: '2',
    type: 'group',
    label: '布局大小',
    children: [
      {
        key: 'small',
        label: '小',
      },
      {
        key: 'middle',
        label: '中',
      },
      {
        key: 'large',
        label: '大',
      },
    ],
  },
];



const centerItems = [
  {
    key: '2',
    type: 'group',
    label: '@你好',
    children: [
      {
        key: '1',
        label: '个人信息',
      },
      {
        key: '2',
        label: '修改密码',
      },
      {
        key: '3',
        label: '设置',
      },
    ],
  },
  {
    key: '33',
    label: '退出',
  },
];


NProgress.start();
window.setTimeout(() => {
  NProgress.done();
}, 500);

const App = (props) => {
  const { setTheme } = useApp();
  // 修改 context 中的值
  const themeClick = (e) => {
    setTheme(e.key)
  }
  // 个人中心
  const centerClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  // 顶部路由跳转
  const navigate = useNavigate()
  const routerClick = (item) => {
    NProgress.start();
    window.setTimeout(() => {
      NProgress.done();
    }, 350);
    navigate(item.key)
  }
  
 const matches = useMatches();
 const { data,pathname }  = matches.at(-1)
  return (
    <Layout.Header
      style={{
        position: 'fixed',
        zIndex: 1,
        display: 'flex',
        width: '100%',
        padding: '0px 25px 0px 40px',
        alignItems: 'center',
        borderBottom: 'var(--ant-line-width) var(--ant-line-type) var(--ant-color-split)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="demo-logo">Admin Lffe</div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              algorithm: true,
              fontSize: 16,
              horizontalItemHoverBg: 'var(--ant-menu-item-hover-bg)',
              horizontalItemSelectedBg: 'var(--ant-menu-item-hover-bg)',
              horizontalItemBorderRadius: 8,
              itemBg: '',
            }
          },
        }}
      >

        <BaseHeaderSkeleton loading={props.topMenuItem.length === 0}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[data?.parentPaths ? data?.parentPaths![0] : null,pathname]}
            items={props.topMenuItem && props.topMenuItem.length > 0 ? props.topMenuItem : []}
            style={{
              lineHeight: '36px',
              flex: 1,
              minWidth: 0,
              borderBottom: 0,
              fontWeight: 'bold'
            }}
            onClick={routerClick}
          />
        </BaseHeaderSkeleton>
      </ConfigProvider>

      <Space size="large">
        <Dropdown className="header-select" menu={{ items:themeItems, onClick: themeClick }} placement="bottom" arrow={{ pointAtCenter: true }}>
          <a onClick={(e) => e.preventDefault()}>
            主题布局
          </a>
        </Dropdown>

        <Dropdown className="header-select" menu={{ items:centerItems, onClick: centerClick }} placement="bottom" arrow={{ pointAtCenter: true }} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              个人中心
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>

    </Layout.Header>

  );
};
export default App;