import React,{} from 'react';
import { Space } from 'antd';
import Menu from "@/page/data/Menu";
import Bar from "@/page/data/Bar";
import Bar2 from "@/page/data/Bar2";

import Line from "@/page/data/Line";
import Pie from "@/page/data/Pie";

const App = ()=> {
  return(
    <div style={{ paddingTop: '55px' }}>
      <div className='' style={{
          display: 'flex',
          alignItems: 'center',
          height: '46px',
          background: 'var(--ant-header-bg)',
          paddingInline: '16px'
      }}>
        <Menu />
      </div>
      <div style={{paddingInline: '20px',paddingBlock: '26px'}}>
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
      </div>
    </div>
  )
}

export default App;