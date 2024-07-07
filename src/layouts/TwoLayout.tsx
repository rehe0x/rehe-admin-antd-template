import React, { } from 'react';
import { Outlet, useMatches } from "react-router-dom"
import HorizontalMenu from "@/layouts/components/HorizontalMenu";

const App:React.FC = () => {
  const matches = useMatches();
  const data = (matches.length >= 2 ? matches[matches.length - 2].data : null) as any;
  const menus  = data && data.menus ? data.menus : [];
  return (
    <div style={{}}>
      <div className='' style={{
        display: 'flex',
        alignItems: 'center',
        height: '46px',
        background: 'var(--ant-header-bg)',
        paddingInline: '16px'
      }}>
        <HorizontalMenu menus={menus} />
      </div>
      <Outlet />
    </div>
  )
}

export default App;