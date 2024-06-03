import React, { useState } from 'react';
import { Button,  Form, Input,  Space,  } from 'antd';

import { QueryForm } from "@/components/QueryForm";

const App = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.search(values)
  };
  return (
    <Form  form={form}  onFinish={onFinish}>
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
            <Button type="primary" htmlType="submit">
              添加
            </Button>
            <Button
             onClick={() => {
              form.resetFields();
            }}
            >
              重置
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
            重置
          </Button>
         
        </Space>
      </div> */}
    </Form>
  );
};
export default App;