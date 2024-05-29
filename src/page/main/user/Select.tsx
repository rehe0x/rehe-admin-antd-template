import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';
const { Option } = Select;
const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const getFields = () => {
    const count = expand ? 10 : 3;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          {i % 3 !== 1 ? (
            <Form.Item
              name={`field-${i}`}
              label={`多条件 ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          ) : (
            <Form.Item
              name={`field-${i}`}
              label={`多条件 ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Select something!',
                },
              ]}
              initialValue="1"
            >
              <Select style={{
        // width: 120,
      }}>
                <Option value="1">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
                <Option value="2">222</Option>
              </Select>
            </Form.Item>
          )}
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form form={form} name="advanced_search"  onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div
        style={{
          textAlign: 'right',
        }}
      >
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
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> 展开
          </a>
        </Space>
      </div>
      {/* </div> */}
    </Form>
  );
};
const App = () => {
  
  return (
    <>
      <AdvancedSearchForm />
    
    </>
  );
};
export default App;