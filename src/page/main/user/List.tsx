import React,{useState} from 'react';
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
      <Layout className='home-layout' >
        <Breadcrumb />
        <Spin tip="Loading..." spinning={false}>

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

        </Spin>
      </Layout>
    </>
  );
};
export default App;