import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Space, Button, Dropdown, Spin, ConfigProvider, } from 'antd';
import { DownOutlined, AlignLeftOutlined, BarChartOutlined } from '@ant-design/icons';

import Table from '@/page/main/user/Table'
import Select from '@/page/main/user/Select'
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
  setTimeout(() => {

  }, 300);
  return (
    <>
      <Layout className='page-layout' >
        <Breadcrumb />
        <Spin tip="Loading..." spinning={false}>
          <Layout.Content className='layout-content'>
            <Select />
          </Layout.Content>

          <Layout.Content className='layout-content' >
            <div className='layout-title'>
              <div>
                <Space size="small">
                  <Button type="primary" htmlType="submit">新增</Button>
                  <Button onClick={() => { form.resetFields(); }}>编辑</Button>
                </Space>
              </div>
              <div>
                <Space size="middle">
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <AlignLeftOutlined />
                    </a>
                  </Dropdown>
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <BarChartOutlined />
                    </a>
                  </Dropdown>
                </Space>
              </div>
            </div>
            <Table />
          </Layout.Content>
        </Spin>
      </Layout>
    </>
  );
};
export default App;