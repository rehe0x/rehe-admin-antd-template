import React,{} from 'react';
import { Space } from 'antd';
import Bar from "@/page/data/Bar";
import Bar2 from "@/page/data/Bar2";

import Line from "@/page/data/Line";
import Pie from "@/page/data/Pie";

const App = ()=> {
  return(
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
  )
}

export default App;