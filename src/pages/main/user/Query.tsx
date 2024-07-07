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
          <Form.Item name={`field1`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field2`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field3`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field4`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field5`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field6`} label={`多条件22 `}>
            <Input placeholder="placeholder" />
          </Form.Item>
          <Form.Item name={`field7`} label={`多条件33 `}>
            <Input placeholder="placeholder" />
          </Form.Item>

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