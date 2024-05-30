import React,{useRef, useEffect} from 'react';
import * as echarts from 'echarts';


const option = {
  title: {
    text: '饼图',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
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
    <div ref={ref} style={{width: '400px', height: '400px' }}></div>
  )
}

export default App;