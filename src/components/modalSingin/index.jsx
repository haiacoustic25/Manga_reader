import { Button, Checkbox, Form, Input, Modal } from 'antd';
import '../../assets/styles/singIn.css';
import React, { useState } from 'react';

const ModalSingIn = ({ isModalOpen, handleOk, handleCancel }) => {
  const [typeForm, setTypeForm] = useState('Sing-In');
  const handleChangeTypeForm = (value) => {
    setTypeForm(value);
  };
  const renderForm = () => {
    if (typeForm == 'Sing-In')
      return (
        <Form
          name="basic"
          className="signIn-form"
          layout="vertical"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="EMAIL ADDRESS" name="username">
            <Input placeholder="name@email.com" style={{ height: '45px' }} />
          </Form.Item>

          <Form.Item label="PASSWORD" name="password">
            <Input.Password placeholder="Password" style={{ height: '45px' }} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <div className="signIn-remember">
              <Checkbox>Remember me</Checkbox>
              <span style={{ color: '#5f25a6', cursor: 'pointer' }}>Forgot password?</span>
            </div>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="btn-submit">
              Sign-in
            </Button>
          </Form.Item>
        </Form>
      );

    return (
      <Form
        name="basic"
        className="signIn-form"
        layout="vertical"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="YOUR NAME" name="username">
          <Input placeholder="Name" style={{ height: '45px' }} />
        </Form.Item>
        <Form.Item label="EMAIL ADDRESS" name="username">
          <Input placeholder="name@email.com" style={{ height: '45px' }} />
        </Form.Item>

        <Form.Item label="PASSWORD" name="password">
          <Input.Password placeholder="Password" style={{ height: '45px' }} />
        </Form.Item>
        <Form.Item label="CONFIRM PASSWORD" name="password">
          <Input.Password placeholder="Conform password" style={{ height: '45px' }} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="btn-submit">
            Sign-up
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const renderFooterForm = () => {
    if (typeForm == 'Sing-In')
      return (
        <div className="signIn-footer">
          <span>Don't have an account?</span>
          <span
            style={{ color: ' #5f25a6', cursor: 'pointer' }}
            onClick={() => handleChangeTypeForm('Register')}
          >
            Register
          </span>
        </div>
      );
    return (
      <div className="signIn-footer">
        <span>Have an account?</span>
        <span
          style={{ color: ' #5f25a6', cursor: 'pointer' }}
          onClick={() => handleChangeTypeForm('Sing-In')}
        >
          Register
        </span>
      </div>
    );
  };
  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
      <div className="signIn-title">
        {typeForm == 'Sign-In' ? 'Welcome back!' : 'Create an Account'}
      </div>
      {renderForm()}
      {renderFooterForm()}
    </Modal>
  );
};

export default ModalSingIn;
