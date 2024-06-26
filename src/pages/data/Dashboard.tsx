import React,{} from 'react';
import { Space,Layout } from 'antd';
import Bar from "@/pages/data/Bar";
import Bar2 from "@/pages/data/Bar2";

import Line from "@/pages/data/Line";
import Pie from "@/pages/data/Pie";

const App = ()=> {
  return(
    <Layout className='page-layout' >
      <Space wrap size='large'>
          <Bar />
          <Line />
          <Bar2 />
          <Pie />
          <Bar2 />
          <Bar />
          <Bar />
          <Pie />
          <Bar />
          <Pie />
          <Bar />
          <Line />
          <Pie />
        </Space>
        </Layout>
  )
}

export default App;