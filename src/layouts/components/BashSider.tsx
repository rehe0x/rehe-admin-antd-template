import React, { useState } from 'react';
import { useNavigate,useMatches } from "react-router-dom";
import { Layout, Menu, Button, Tooltip, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import NProgress from '@/components/NProgress';
import { BashSiderSkeleton } from "@/layouts/components/Skeleton";

// 顶部加载条
const App = (props) => {
  // 菜单展开/收缩
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // 加载站位 适当延时
  const [loading, setLoading] = useState(false)
  // setTimeout(() => {
  //   setLoading(false)
  // }, 400);


  const navigate = useNavigate();
  const onClick = async (item, key, keyPath, domEvent) => {
    NProgress.start();
    window.setTimeout(() => {
      NProgress.done();
    }, 350);
    navigate(`${item.key}`);
  }

  // 默认选中菜单
  const matches = useMatches();
  const { data,pathname } = matches.at(-1)
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

          <BashSiderSkeleton loading={loading}>
            <Menu
              mode="inline"
              forceSubMenuRender={true}
              defaultOpenKeys={data.parentPaths}
              // openKeys={data.parentPaths}
              defaultSelectedKeys={pathname}
              // selectedKeys={pathname}
              style={{
                height: '100%',
                borderRight: 0,
                fontWeight: '500'
              }}
              items={props.menus}
              onClick={onClick}
            />
          </BashSiderSkeleton>

        </div>

        <div style={{
          position: 'absolute',
          insetBlockStart: '40px',
          insetInlineEnd: '-13px',
        }}>
          <Tooltip title="折叠/展开">
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