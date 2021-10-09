import React from 'react';
import { Button, message, Space } from 'infrad';
import { ModalForm, ProFormText } from 'infrad-pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <Space>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Customized Footer Button</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="ok"
                onClick={() => {
                  props.submit();
                }}
              >
                ok
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
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Customized Word</Button>}
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
            resetText: 'Cancel',
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
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Hide or Edit Button Style</Button>}
        submitter={{
          resetButtonProps: {
            type: 'dashed',
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
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
      </ModalForm>
      <ModalForm
        title="Hide Footer"
        trigger={<Button type="primary">Hide Footer</Button>}
        submitter={false}
      >
        <ProFormText
          width="md"
          name="name"
          label="Signed Customer Name"
          tooltip="No longer than 24"
          placeholder="please enter name"
        />

        <ProFormText
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter name"
        />
      </ModalForm>
    </Space>
  );
};
