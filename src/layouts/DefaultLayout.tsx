import React,{useEffect} from 'react';
import { Outlet , useMatches} from "react-router-dom"
import { Layout } from 'antd';
import BashSider from "@/layouts/components/BashSider";

const App = () => {
  const matches = useMatches();
  const { data } = matches.at(-2)
  return (
    <Layout style={{}} hasSider={true}>
      <BashSider menus={data ? data.menus : []}/>
      <Outlet />
    </Layout>
  );
};
export default App;