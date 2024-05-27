import { ConfigProvider, Skeleton } from 'antd';

export const BashSiderSkeleton = (props) => {
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



export const BaseHeaderSkeleton = (props) => {
  if (props.loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1
      }}>
        <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} />
        <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} />
        <Skeleton.Button style={{ display: 'flex', marginInline: '10px' }} active block={false} />
      </div>
    )
  } else {
    return props.children
  }
}

export const BashIndexSkeleton = (props) => {
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