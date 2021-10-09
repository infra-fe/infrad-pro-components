import React, { useRef } from 'react';
import { message, Button } from 'infrad';
import type { ProFormInstance } from 'infrad-pro-form';
import ProForm, { ProFormText } from 'infrad-pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const formRef = useRef<ProFormInstance>();

  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: 'Tony Stark',
      company: 'Ant Financial',
    });
  };

  const getCompanyName = () => {
    message.info(`The company name is  "${formRef?.current?.getFieldValue('company')}"`);
  };

  return (
    <ProForm
      title="Create New Form"
      formRef={formRef}
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button htmlType="button" onClick={onFill} key="edit">
              One Click Filling
            </Button>,
            <Button htmlType="button" onClick={getCompanyName} key="read">
              Get Company Info
            </Button>,
          ];
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submit Successfully!');
        return true;
      }}
    >
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
    </ProForm>
  );
};
