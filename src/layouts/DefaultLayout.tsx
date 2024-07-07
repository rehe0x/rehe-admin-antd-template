import React,{useEffect} from 'react';
import { Outlet , useMatches} from "react-router-dom"
import { Layout } from 'antd';
import BashSider from "@/layouts/components/BashSider";

const App:React.FC = () => {
  const matches = useMatches();
  const data = (matches.length >= 2 ? matches[matches.length - 2].data : null) as any;
  const menus  = data && data.menus ? data.menus : [];
  return (
    <Layout style={{}} hasSider={true}>
      <BashSider menus={menus}/>
      <Outlet />
    </Layout>
  );
};
export default App;