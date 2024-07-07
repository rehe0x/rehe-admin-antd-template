import React, { useState, useEffect } from 'react'
import { useNavigate, useMatches } from "react-router-dom";
import { Layout, Menu, Space, Dropdown, ConfigProvider, message, Avatar, Badge } from 'antd';
import { DownOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useAuth } from "@/stores/AuthContext";
import { useApp } from "@/stores/AppContext";
import NProgress from '@/components/NProgress';
import { BaseHeaderSkeleton } from "@/layouts/components/Skeleton";
import './BaseHeader.css'

const themeItems:any = [
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

const layoutItems = [
  {
    key: '1',
    label: '默认',
  },
  {
    key: '2',
    label: 'Top',
  },
  {
    key: '3',
    label: 'Left',
  },
];

const centerItems:any = [
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
    key: '999',
    label: '退出',
  },
];


NProgress.start();
window.setTimeout(() => {
  NProgress.done();
}, 500);


const App:React.FC<{
  topMenuItem:any[]
}> = (props) => {
  const { username } = useAuth()
  const { setTheme,setLayoutMode } = useApp();

  // 修改 context 中的值
  const themeClick = (e) => {
    setTheme(e.key)
  }
  const layoutClick = (e) => {
    navigate('')
    setTimeout(()=>{
      setLayoutMode(e.key)
    },500)
  }
  // 个人中心
  const centerClick = ({ key }) => {
    if (key == 999) {
      navigate('/login')
      message.info(`退出成功`);
    } 
  };

  // 顶部路由跳转
  const navigate = useNavigate()
  const toRoute = (item) => {
    NProgress.start();
    window.setTimeout(() => {
      NProgress.done();
    }, 350);
    navigate(item.keyPath[0])
  }

  const { data, pathname } = useMatches().at(-1) as any
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

        <BaseHeaderSkeleton loading={props.topMenuItem.length === 0}
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: 1
          }} >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[data?.parentPaths ? data?.parentPaths![0] : null, pathname]}
            items={props.topMenuItem && props.topMenuItem.length > 1 ? props.topMenuItem : []}
            style={{
              lineHeight: '36px',
              flex: 1,
              minWidth: 0,
              borderBottom: 0,
              fontWeight: 'bold'
            }}
            onClick={toRoute}
          />
        </BaseHeaderSkeleton>
      </ConfigProvider>


      <BaseHeaderSkeleton num={2} loading={props.topMenuItem.length === 0}
        style={{
          display: 'flex',
          alignItems: 'center',
        }} >

        <Space size="large">
        
          <Dropdown className="header-select" menu={{ items: themeItems , onClick: themeClick }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <a style={{ fontSize: '18px' }} onClick={(e) => e.preventDefault()}>
              <MoonOutlined />
            </a>
          </Dropdown>

          <Dropdown className="header-select" menu={{ items: layoutItems, onClick: layoutClick }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <a  style={{
              fontWeight: 500
            }}  onClick={(e) => e.preventDefault()}>
              布局
            </a>
          </Dropdown>

          <Dropdown className="header-select" menu={{ items: centerItems, onClick: centerClick }} placement="bottom" arrow={{ pointAtCenter: true }} >

            <a style={{
              fontWeight: 500
            }} onClick={(e) => e.preventDefault()}>

              <Space>
                <Badge dot>
                  <Avatar
                    style={{
                      backgroundColor: '#7265e6',
                      verticalAlign: 'middle',
                      display: 'flex'
                    }}
                    size={35}
                    gap={2}
                  >
                    Lucy
                  </Avatar>
                </Badge>
                {username}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </BaseHeaderSkeleton>



    </Layout.Header>

  );
};
export default App;