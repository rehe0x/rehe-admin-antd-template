import React, { } from 'react';
import { Outlet, useMatches } from "react-router-dom"
import HorizontalMenu from "@/layouts/components/HorizontalMenu";

const App = () => {
  const matches = useMatches();
  console.log('matches=====')

  console.log(matches)
  const { data } = matches.at(-2)
  return (
    <div style={{}}>
      <div className='' style={{
        display: 'flex',
        alignItems: 'center',
        height: '46px',
        background: 'var(--ant-header-bg)',
        paddingInline: '16px'
      }}>
        <HorizontalMenu menus={data ? data.menus : []} />
      </div>
      <Outlet />
    </div>
  )
}

export default App;