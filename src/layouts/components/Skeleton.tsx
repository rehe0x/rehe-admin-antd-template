import { ConfigProvider, Skeleton } from 'antd';
import React from 'react';

export const BashSiderSkeleton:React.FC<{
  loading:boolean;
  children?:any
}> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightXS: 26,
        },
        components: {
          Skeleton: {
            paragraphLiHeight: 26,
          }
        }
      }}
    >
      <Skeleton
        style={{
          paddingInline: '15px',
        }}
        loading={props.loading}
        active
        title={false}
        paragraph={{
          rows: 6,
          width: ['100%', '70%', '70%', '100%', '70%', '70%']
        }}
      >
        {props.children}
      </Skeleton>
    </ConfigProvider>
  )
}



export const BaseHeaderSkeleton:React.FC<{
  loading:boolean;
  num?:number;
  style?:any;
  children?:any
}>  = (props) => {
  if (props.loading) {
    const numbers = Array.from({ length: props.num ? props.num : 3}, (_, i) => i + 1); 

    return (
      <div style={props.style}>
        {numbers.map(n => (
           <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} key={n} active block={false} />
        ))}
        {/* <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} />
        <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} />
        <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} /> */}
      </div>
    )
  } else {
    return props.children
  }
}

export const BashIndexSkeleton:React.FC<{
  loading:boolean
  children?:any
}> = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightXS: 40,
        },
        components: {
          Skeleton: {
            paragraphLiHeight: 30,
          }
        }
      }}
    >
      <Skeleton
        style={{
          paddingInline: '20px',
          marginTop: '85px'
        }}
        loading={props.loading}
        active
        title={false}
        paragraph={{
          rows: 8,
          width: ['100%', '70%', '100%','70%', '100%', '70%', '100%','70%',]
        }}
      >
        {props.children}
      </Skeleton>
    </ConfigProvider>
  )
}