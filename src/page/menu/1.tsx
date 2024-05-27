import { Layout,  Spin, } from 'antd';
const App = () => {

  return (
    <>
      <Layout className='home-layout' style={{
    paddingTop: '65px',
    paddingInline: '20px'
  }}>
        {/* <Breadcrumb /> */}

    <Spin tip="Loading..." spinning={false}>
    
        <Layout.Content
          className='layout-content layout-content-margin-bottom'
        >
         二级菜单
        </Layout.Content>

        

    </Spin>
      </Layout>
    </>
  );
};
export default App;