import React, { useState ,useEffect} from 'react';
import { Layout,  Space, Button, Dropdown, Table,Tag} from 'antd';
import {  AlignLeftOutlined, BarChartOutlined } from '@ant-design/icons';
import { Permission } from "@/components/Permission";
import Breadcrumb from "@/components/Breadcrumb";
import { useTable } from '@/hooks/UseTable'
import Query from '@/pages/main/user/Query'
import { UserService } from "./service";
import { CollectionCreateFormModal } from "@/pages/main/user/Add";

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

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '地址1',
      dataIndex: 'address',
    },
    {
      title: '地址2',
      dataIndex: 'address',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => refresh()}>编辑</a>
          <a onClick={() => query({cehis:'123123',sd:'ff'})}>删除</a>
        </Space>
      ),
    },
  ];

  const [openAdd, setOpenAdd] = useState(false);

  const{ tableProps,refresh,query }= useTable(UserService.getUserList)

  
  return (
    <Layout className='page-layout' >
      <Breadcrumb />
      
      <Layout.Content className='layout-content'>
        <Query search={query} />
      </Layout.Content>

      {/* <Layout.Content className='layout-content'>
        <Query search={search} />
      </Layout.Content> */}

      <Layout.Content className='layout-content' >
        <div className='layout-title'>
          <Space size="small">
          <Permission code={['user:add']}>
            <Button type="primary" onClick={() => setOpenAdd(true)}>新增</Button>
          </Permission>
            <Button onClick={() => { form.resetFields(); }}>编辑</Button>
          </Space>
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

        <Table columns={columns} {...tableProps}/>
      </Layout.Content>
      <CollectionCreateFormModal
        open={openAdd}
        setOpenAdd={setOpenAdd}
      />
    </Layout>
  );
};
export default App;