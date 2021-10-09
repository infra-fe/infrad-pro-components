import React, { useState } from 'react';
import { Button, message, Space } from 'infrad';
import ProForm, {
  ModalForm,
  DrawerForm,
  QueryFilter,
  LightFilter,
  StepsForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  LoginForm,
} from 'infrad-pro-form';
import {
  AlipayCircleOutlined,
  LockOutlined,
  PlusOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from 'infra-design-icons';

const iconStyles = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const [type, setType] = useState('ProForm');
  const Components = {
    ProForm,
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm,
    LoginForm,
  };

  if (type === 'StepsForm') {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
          }}
          options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
          ]}
        />
        <StepsForm
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submit Successfully！');
          }}
        >
          <StepsForm.StepForm title="First Step">
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label="Signed Customer Name"
                tooltip="No longer than 24"
                placeholder="Please enter name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                width="md"
                label="Contract Title"
                placeholder="Please enter name"
              />
              <ProFormDateRangePicker
                width="md"
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Second Step">
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after Stamping',
                  },
                ]}
                readonly
                width="xs"
                name="useMode"
                label="Effective Way of Contract"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Termination after Fulfillment',
                  },
                ]}
                name="unusedMode"
                label="Contractual Invalidation Method"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Third Step">
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText
              name="project"
              width="md"
              disabled
              label="Project Name"
              initialValue="Project xxxx"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="QiTu"
            />
          </StepsForm.StepForm>
        </StepsForm>
      </>
    );
  }

  const FormComponents = Components[type];

  if (type === 'LoginForm') {
    return (
      <FormComponents
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
        {' '}
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'用户名: admin or user'}
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
      </FormComponents>
    );
  }

  return (
    <>
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: type,
          onChange: (e) => setType(e.target.value),
        }}
        options={[
          'LightFilter',
          'ProForm',
          'ModalForm',
          'DrawerForm',
          'QueryFilter',
          'StepsForm',
          'LoginForm',
        ]}
      />
      <div
        style={{
          margin: 24,
        }}
      >
        <FormComponents
          labelWidth="auto"
          trigger={
            <Button type="primary">
              <PlusOutlined />
              Create New Form
            </Button>
          }
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submit Successfully!');
          }}
          initialValues={{
            name: 'Ant Design Limited Company',
            useMode: 'chapter',
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="Signed Customer Name"
              tooltip="No longer than 24"
              placeholder="Please enter name"
            />
            <ProFormText
              width="md"
              name="company"
              label="Our Company Name"
              placeholder="Please enter name"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              name={['contract', 'name']}
              width="md"
              label="Contract Title"
              placeholder="Please enter name"
            />
            <ProFormDateRangePicker
              width="md"
              name={['contract', 'createTime']}
              label="Contract Effective Time"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after Stamping',
                },
              ]}
              readonly
              width="xs"
              name="useMode"
              label="Effective Way of Contract"
            />
            <ProFormSelect
              width="xs"
              options={[
                {
                  value: 'time',
                  label: 'Termination after Fulfillment',
                },
              ]}
              name="unusedMode"
              label="Contractual Invalidation Method"
            />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="Main Contract Number" />
          <ProFormText
            name="project"
            width="md"
            disabled
            label="Project Name"
            initialValue="Project xxxx"
          />
          <ProFormText
            width="xs"
            name="mangerName"
            disabled
            label="Business Manager"
            initialValue="QiTu"
          />
        </FormComponents>
      </div>
    </>
  );
};
