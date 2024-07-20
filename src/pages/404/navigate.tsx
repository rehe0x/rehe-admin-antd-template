import React,{useEffect} from 'react';
import { Button, Result } from 'antd';
import { useNavigate,useMatches } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/404")
  },[])
  return null
};
export default App;