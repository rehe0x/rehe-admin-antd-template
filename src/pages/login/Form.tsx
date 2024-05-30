import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import storage from "@/common/storage";

const LoginFrom = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setLoading(true)
    setTimeout(() => {
      storage.setStorage('token','123123')
      setLoading(false)
      navigate('/')
    }, 1000);
  };

 

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      style={{width: '320px'}}
      onFinish={onFinish}
      layout='vertical'
    >
      <Form.Item
        name="username"
        label='Username'
        rules={[
          {
            required: true,
            message: '请输入您的用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} size='large' placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label='Password'

        rules={[
          {
            required: true,
            message: '请输入您的密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size='large'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button style={{width: '100%'}} size='large' type="primary" htmlType="submit" loading={loading} iconPosition='end' className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">注册!</a> */}
      </Form.Item>
    </Form>
  );
};


export default LoginFrom