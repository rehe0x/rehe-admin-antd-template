import React, { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography, Space, Divider } from 'antd';
import { useNavigate } from "react-router-dom";
import storage from "@/common/storage";
import LoginForm from "@/pages/login/Form";
import LeftCarousel from "@/pages/login/Left";

import './Login.css'

const Login = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);

  //   window.addEventListener('resize', handleWindowResize);
  //   return () => window.removeEventListener('resize', handleWindowResize);
  // }, []);

  // console.log(width)
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      {!(width < 700) ? (<div style={{
        width: '50%',
      }}>
        <LeftCarousel />
      </div>) :
        (<></>)
      }

      <div style={{
        width: '50%',
        background: 'var(--ant-color-bg-base)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: 'url(src/assets/img/3.png)',
        // backgroundSize: 'cover'
      }}>
        <div>
        <Space direction='vertical' size={20} align='center'>
          <div>
            <Typography.Title
              level={2}
              style={{
                textAlign: 'center'
              }}
            >
              Lffe Admin System manager 
            </Typography.Title>
            <Typography.Title
              level={5}
              style={{
                textAlign: 'center'
              }}
            >
              Lffe Admin manager
            </Typography.Title>
          </div>
          <div>
            <LoginForm />
            <Divider>or</Divider>
          </div>
          <Space direction='vertical' size={20}>
            <Button style={{ width: '320px' }} size='large'>Google</Button>
            <Button style={{ width: '320px' }} size='large'>QRcode</Button>
          </Space>
        </Space>
        </div>
      </div>
    </div>
  )
}


export default Login