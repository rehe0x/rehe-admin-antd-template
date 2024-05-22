import React from 'react';
import { Outlet } from "react-router-dom"

import { Layout } from 'antd';

import BaseHeader from "@/layouts/components/BaseHeader";
import './Index.css'

const App = () => {
  return (
    <Layout>
      <BaseHeader />
      <Outlet />
    </Layout>
  );
};
export default App;