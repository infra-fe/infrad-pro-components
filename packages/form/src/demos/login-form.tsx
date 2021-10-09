import { LoginForm, ProFormText, ProFormCaptcha, ProFormCheckbox } from 'infrad-pro-form';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from 'infra-design-icons';
import { message, Tabs, Space } from 'infrad';
import type { CSSProperties } from 'react';
import { useState } from 'react';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="Sign in to GitHub"
        actions={
          <Space>
            Other Login Methods
            <AlipayCircleOutlined style={iconStyles}></AlipayCircleOutlined>
            <TaobaoCircleOutlined style={iconStyles}></TaobaoCircleOutlined>
            <WeiboCircleOutlined style={iconStyles}></WeiboCircleOutlined>
          </Space>
        }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'Account & Password Login'} />
          <Tabs.TabPane key={'phone'} tab={'Phone Number Login'} />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'username: admin or user'}
              rules={[
                {
                  required: true,
                  message: 'Please enter username!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'password: ant.design'}
              rules={[
                {
                  required: true,
                  message: 'Please enter password!',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'Phone Number'}
              rules={[
                {
                  required: true,
                  message: 'Please enter phone number!',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: 'Phone number is not right!',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'Please enter Verification Code!'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'Receive Verification Code'}`;
                }
                return 'Receive Verification Code';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: 'Please enter Verification Code!',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('Receive Verification Code Successfully！The code is: 1234');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            AutoLogin
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            Forget Password
          </a>
        </div>
      </LoginForm>
    </div>
  );
};
