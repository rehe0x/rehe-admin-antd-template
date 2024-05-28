import React, { } from 'react';
import { Outlet, useMatches } from "react-router-dom"
import HorizontalMenu from "@/layouts/components/HorizontalMenu";

const App = () => {
  const matches = useMatches();
  console.log('matches=====')

  console.log(matches)
  const { data } = matches.at(-2)
  return (
    <div style={{ paddingTop: '55px' }}>
      <div className='' style={{
        display: 'flex',
        alignItems: 'center',
        height: '46px',
        background: 'var(--ant-header-bg)',
        paddingInline: '16px'
      }}>
        <HorizontalMenu menus={data ? data.menus : []} />
      </div>
      <div style={{ paddingInline: '20px', paddingBlock: '26px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App;