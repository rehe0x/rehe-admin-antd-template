import React,{Children, useState}from 'react';
import { Layout, Menu, Button, Flex, Tooltip, Typography } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const items3 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `主题菜单${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: `subKey${subKey}`,
        label: `则色菜单${subKey}`,
      };
    }),
  };
});

const items4 = [
  {
    key: ``,
    icon: React.createElement(UserOutlined),
    label: `Dashboard`
  },
  {
    key: ``,
    icon: React.createElement(UserOutlined),
    label: `系统管理`,
    children: [
      {
        key: `user`,
        // icon: React.createElement(UserOutlined),
        label: `用户管理`
      },
      {
        key: `menu`,
        // icon: React.createElement(UserOutlined),
        label: `菜单管理`
      },
    ]
  },
  
]

const items2 = [...items4, ...items3]


const App = () => {
  const navigate = useNavigate();
  const onClick = (item, key, keyPath, domEvent) => {
    console.log(item)
    navigate(`/${item.key}`);
  }

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout.Sider collapsed={collapsed} breakpoint='xl' collapsedWidth={80}></Layout.Sider>
      <Layout.Sider
        breakpoint='xl'
        collapsed={collapsed}
        collapsedWidth={80}
        style={{
          paddingTop: 5, height: 'calc(100vh - var(--ant-layout-header-height))', position: 'fixed',
        }}
      >
        <div style={{
          overflow: 'hidden auto',
          scrollbarWidth: 'none',
          flex: 1
        }}>

          <Menu
            mode="inline"
            defaultSelectedKeys={['home']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
            onClick= {onClick}
          />
        </div>

        <div style={{
          position: 'absolute',
          insetBlockStart: '10px',
          insetInlineEnd: '-13px',
        }}>
          <Tooltip title="search">
            <Button onClick={toggleCollapsed} size='small' shape="circle" icon={<LeftOutlined rotate={collapsed ? 180 : 0} style={{
              fontSize: '10px'
            }} />} />
          </Tooltip>
        </div>

        <div style={{
          paddingBlockEnd: '8px',
          paddingInline: '10px',
          textAlign: 'center'
        }}>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            footer
          </Typography.Title>
        </div>
      </Layout.Sider>
    </>

  );
};
export default App;