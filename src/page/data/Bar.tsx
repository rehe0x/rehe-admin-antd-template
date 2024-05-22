import React,{useRef, useEffect} from 'react';
import * as echarts from 'echarts';


const option = {
  title: {
    text: '柱状图'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};




const App = ()=> {
  const ref = useRef(null)
  const initChart = ()=> {
    const myChart = echarts.init(ref.current, '');
    myChart.setOption(option);
  }
  
  useEffect(()=>{
    initChart()
  },[])
  
  return(
    <div ref={ref} style={{width: '350px', height: '400px' }}></div>
  )
}

export default App;