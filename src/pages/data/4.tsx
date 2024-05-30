import { Layout,  Spin, } from 'antd';

const App = () => {

  return (
    <>
      <Layout className='home-layout'>
        {/* <Breadcrumb /> */}

    <Spin tip="Loading..." spinning={false}>
    
        <Layout.Content
          className='layout-content layout-content-margin-bottom'
        >
         图表4
        </Layout.Content>

        

    </Spin>
      </Layout>
    </>
  );
};
export default App;