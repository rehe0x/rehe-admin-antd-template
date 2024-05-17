import React from 'react';
import { Layout } from 'antd';

import BaseHeader from "@/layouts/components/BaseHeader";
import HomeLayout from "@/layouts/HomeLayout";

import './Index.css'

const App = () => {
  return (
    <Layout>
      <BaseHeader />
      <HomeLayout />
    </Layout>
  );
};
export default App;