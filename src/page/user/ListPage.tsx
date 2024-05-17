import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Space, Button, Dropdown, ConfigProvider, } from 'antd';
import { DownOutlined, AlignLeftOutlined, BarChartOutlined } from '@ant-design/icons';

import Table from '@/page/user/Table'
import Select from '@/page/user/Select'

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
      <Layout className='home-layout'>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
          items={[
            { title: '主题' },
            { title: '菜单管理' },
            { title: '子菜单' },
          ]}
        />

        <Layout.Content
          className='layout-content layout-content-margin-bottom'
        >
          <Select />
        </Layout.Content>

        <Layout.Content
          className='layout-content'
        >
          {/* <Select /> */}

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>


            <div>
              {/* <Typography.Title  level={4} style={{ margin: 0 }}>
        订单列表
      </Typography.Title> */}
              <Space size="small">
                <Button type="primary" htmlType="submit">
                  新增
                </Button>
                <Button
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  编辑
                </Button>

              </Space>
            </div>
            <div
              style={{
                //   textAlign: 'right',
              }}
            >
              <Space size="middle">

                <Dropdown menu={{ items }} trigger={['click']}>
                  <a onClick={(e) => e.preventDefault()}>
                    {/* <Space> */}
                    {/* Click me */}
                    <AlignLeftOutlined />
                    {/* <BarChartOutlined /> */}
                    {/* </Space> */}
                  </a>
                </Dropdown>

                <Dropdown menu={{ items }} trigger={['click']}>
                  <a onClick={(e) => e.preventDefault()}>
                    {/* <Space> */}
                    {/* Click me */}
                    {/* <AlignLeftOutlined /> */}
                    <BarChartOutlined />
                    {/* </Space> */}
                  </a>
                </Dropdown>
              </Space>
            </div>
          </div>

          <Table />
        </Layout.Content>
      </Layout>
    </>
  );
};
export default App;