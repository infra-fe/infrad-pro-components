import React, { useState } from 'react';
import { message } from 'infrad';
import ProForm, { ProFormText, ProFormRadio } from 'infrad-pro-form';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={formLayout}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submit Successfully!');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: 'Ant Design Limited Company',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="Label Layout"
        radioType="button"
        fieldProps={{
          value: formLayout,
          onChange: (e) => setFormLayout(e.target.value),
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <div>
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
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="Contract Name"
          placeholder="Please enter name"
        />
      </div>
    </ProForm>
  );
};
