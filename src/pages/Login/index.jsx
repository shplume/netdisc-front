import { Button, Form, Input, Card } from 'antd';
import { CloudTwoTone, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import styles from './index.less';
import { useState } from 'react';
import { intl } from '../../locales/intl';

export default function Login() {
  const [input, setInput] = useState({
    account: '',
    password: '',
  });

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <Card
          style={{
            width: 400,
            height: 500,
          }}
        >
          <div className={styles.form}>
            <div className={styles.logo}>
              <CloudTwoTone style={{ fontSize: '80px' }} />
              <div className={styles.title}>{intl('pages.login.title')}</div>
            </div>
            <Form
              name="login"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
                marginTop: 64,
              }}
              onFinish={onFinish}
            >
              <Form.Item name="username">
                <Input
                  size="large"
                  placeholder={intl('pages.login.accountMsg')}
                  style={{ width: 256 }}
                  prefix={<IdcardOutlined />}
                  onChange={(e)=>{
                    setInput({
                      ...input,
                      account: e.target.value,
                    })
                  }}
                />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  size="large"
                  placeholder={intl('pages.login.passwordMsg')}
                  prefix={<LockOutlined />}
                  style={{ width: 256 }}
                  onChange={(e)=>{
                    setInput({
                      ...input,
                      password: e.target.value,
                    })
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginTop: 16, width: 256 }}
                  size="large"
                  disabled={input.account == '' || input.password == ''}
                >
                  {intl('pages.login.buttonMsg')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}
