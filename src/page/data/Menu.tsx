import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider } from 'antd';

import { Menu } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '基础数据',
    key: 'mail',
    // icon: <MailOutlined />,
  },
  {
    label: 'Navigation One',
    key: 'mail1',
    // icon: <MailOutlined />,
  },
  {
    label: 'Navigation One',
    key: 'mail2',
    // icon: <MailOutlined />,
  },
  {
    label: 'Navigation One',
    key: 'mail3',
    // icon: <MailOutlined />,
  },
  
 
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            algorithm: true,
            horizontalItemHoverBg: 'var(--ant-menu-item-hover-bg)',
            horizontalItemSelectedBg: 'var(--ant-menu-item-hover-bg)',
            horizontalItemBorderRadius: 8,
            itemBg: '',
          }
        },
      }}
    >
      <Menu style={{
            lineHeight: '32px',
            // flex: 1,
            minWidth: 0,
            borderBottom: 0,
            // fontWeight: 'bold'
          }}
           onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </ConfigProvider>
  )
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;