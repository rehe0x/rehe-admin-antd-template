import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Space, Button, Dropdown, Spin, ConfigProvider, } from 'antd';
import { DownOutlined, AlignLeftOutlined, BarChartOutlined } from '@ant-design/icons';

import Table from '@/page/main/user/Table'
import Select from '@/pages/main/user/Select'
import Breadcrumb from "@/components/Breadcrumb";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const App = () => {

  return (
    <>
      <Layout className='page-layout' >
        <Breadcrumb />

        <Layout.Content className='layout-content'>
          二级菜单
        </Layout.Content>

      </Layout>
    </>
  );
};
export default App;