import { Layout,  Spin, } from 'antd';
import Breadcrumb from "@/components/Breadcrumb";


const App = () => {

  return (
    <>
      <Layout className='home-layout'>
        <Breadcrumb />

    <Spin tip="Loading..." spinning={false}>
    
        <Layout.Content
          className='layout-content layout-content-margin-bottom'
        >
         三级菜单
        </Layout.Content>

        

    </Spin>
      </Layout>
    </>
  );
};
export default App;