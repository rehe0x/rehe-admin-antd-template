import React from 'react';
import { Outlet } from "react-router-dom"

import { Layout } from 'antd';

import BashSider from "@/layouts/components/BashSider";

import './Index.css'

const App = () => {
  return (
    <Layout style={{paddingTop: '55px'}} hasSider={true}>
      <BashSider />
      {/* <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        background: 'var(--ant-layout-body-bg)',
        overflow: 'hidden',
        zIndex: -10,

      }} /> */}
      {/* <ListPage /> */}
      <Outlet />
    </Layout>
  );
};
export default App;