import { theme } from 'antd';
import { MapToken } from 'antd/es/theme/interface/index';
import { SeedToken } from 'antd/es/theme/internal';
// import type { MappingAlgorithm } from 'antd/es/config-provider/context';


// colorBgLayout: '#20252b', // Layout 背景色
// colorBgContainer: '#282c34', // 组件容器背景色 
// colorBgElevated: '#32363e', // 悬浮容器背景色


// 暗黑算法
const CustomDarkAlgorithm = (seedToken: SeedToken, mapToken: MapToken | undefined) => {
    //定制sendToken 
    const customSendToken = {
        // colorPrimary: "#476BD6",
        // colorInfo: "#476BD6",
        // colorTextBase: '#dadada',

        colorPrimary: "#4169e7",
        colorInfo: "#4169e7",
        colorTextBase: '#dadada',
      
        headerBg: 'rgba(20, 20, 20, 0.6)',
        siderBg: '#141414',

    }
    //扩展extendToken 
    const extendToken = {
        
    }
    //使用 antd 默认的暗色算法生成基础token
    const baseToken = theme.darkAlgorithm({...seedToken,...customSendToken,...extendToken}, mapToken);
    return baseToken
  };
  
// 默认算法
const CustomDefaultAlgorithm = (seedToken: SeedToken) => {
    //定制sendToken 
    const customSendToken = {
        colorPrimary: "#4169e7",
        colorInfo: "#4169e7",
        colorTextBase: '#3c3c3c',
      
        headerBg: 'rgba(255, 255, 255, 0.6)',
        siderBg: '#ffff',


    }
    //扩展extendToken 
    const extendToken = {

    }
    //使用 antd 默认算法生成基础token
    const baseToken = theme.defaultAlgorithm({...seedToken,...customSendToken,...extendToken});
    return baseToken
  };
  
export default {CustomDarkAlgorithm,CustomDefaultAlgorithm}
