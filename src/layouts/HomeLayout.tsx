import React from 'react';
import { Layout } from 'antd';

import BashSider from "@/layouts/components/BashSider";
import ListPage from "@/page/user/ListPage";

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
      <ListPage />
    </Layout>
  );
};
export default App;