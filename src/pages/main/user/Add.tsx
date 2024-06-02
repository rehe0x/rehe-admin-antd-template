import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
const CollectionCreateForm = ({ initialValues, onFormInstanceReady }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);
  return (
    <Form layout="vertical" form={form} name="form_in_modal" initialValues={initialValues}>
      <Form.Item
        name="title"
        label="用户名"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="描述">
        <Input type="textarea" />
      </Form.Item>
      <Form.Item name="modifier" className="collection-create-form_last-form-item">
        <Radio.Group>
          <Radio value="public">Public</Radio>
          <Radio value="private">Private</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
export const CollectionCreateFormModal = ({ open, setOpenAdd  }) => {
  const [formInstance, setFormInstance] = useState();
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpenAdd(false);
  };
  return (
    <Modal
      mask
      open={open}
      title="创建用户"
      okText="保存"
      cancelText="取消"
      okButtonProps={{
        autoFocus: true,
      }}
      onCancel={() => setOpenAdd(false)}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          formInstance?.resetFields();
          onCreate(values);
        } catch (error) {
          console.log('Failed:', error);
        }
      }}
    >
      <CollectionCreateForm
        initialValues={{
          modifier: 'public',
        }}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      />
    </Modal>
  );
};
const App = () => {
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <CollectionCreateFormModal
        open={open}
        onCreate={onCreate}
        onCancel={() => setOpen(false)}
        initialValues={{
          modifier: 'public',
        }}
      />
    </>
  );
};
export default App;