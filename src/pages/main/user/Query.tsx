import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme,Radio } from 'antd';

import { QueryForm } from "./QueryForm";

const { Option } = Select;


const App = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.search(values)
  };
  return (
    <Form  form={form} name="advanced_search"  onFinish={onFinish}>
      <QueryForm>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field`} label={`多条件33 `}>
            <Input placeholder="placeholder" />
          </Form.Item>

          <Space size="small">
            <Button type="primary" >
              查询
            </Button>
            <Button
            >
              重制
            </Button>
          </Space>
      </QueryForm>
     
      {/* <div>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            重制
          </Button>
         
        </Space>
      </div> */}
    </Form>
  );
};
export default App;