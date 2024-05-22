import { Layout, Menu, Space, Dropdown, ConfigProvider, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import React,{ useState,useContext } from 'react'
import { AppConfigContext } from "@/stores/ContextProvider";

import './Index.css'

const items1 = [
  {
    key:'/',
    label: `/`
  },
  {
    key:'data',
    label: `图表`
  },
  {
    key:'sb',
    label: `随便`
  }
]

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
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




const App = () => {
   const {
    setTheme
  } = useContext(AppConfigContext);

  // 修改 context 中的值
  const handleClickssf = (e) => {
    setTheme(e.key)
    }

  const navigate = useNavigate()

  const onClickLe = (item) => {
    navigate(item.key)
  }
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
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            lineHeight: '36px',
            flex: 1,
            minWidth: 0,
            borderBottom: 0,
            fontWeight: 'bold'
          }}
          onClick={onClickLe}
        />
      </ConfigProvider>

      <Space size="large">
        <Dropdown className="header-select" menu={{ items, onClick: handleClickssf }} placement="bottom" arrow={{ pointAtCenter: true }}>
          <a onClick={(e) => e.preventDefault()}>
            主题布局
          </a>
        </Dropdown>

        <Dropdown className="header-select" menu={{ items, onClick }} placement="bottom" arrow={{ pointAtCenter: true }} >
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