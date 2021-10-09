import React, { useRef, useState } from 'react';
import { Button, message, Space } from 'infrad';
import type { ProFormInstance } from 'infrad-pro-form';
import { ModalForm, ProFormText } from 'infrad-pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const restFormRef = useRef<ProFormInstance>();
  const formRef = useRef<ProFormInstance>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Space>
      <ModalForm
        title="Create New Form"
        formRef={restFormRef}
        visible={modalVisible}
        trigger={
          <Button
            type="primary"
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Reset by formRef
          </Button>
        }
        onVisibleChange={setModalVisible}
        submitter={{
          searchConfig: {
            resetText: 'Reset',
          },
          resetButtonProps: {
            onClick: () => {
              restFormRef.current?.resetFields();
              //   setModalVisible(false);
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
        title="Create New Form"
        formRef={formRef}
        trigger={<Button type="primary">Reset by Customized Footer Button</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="extra-reset"
                onClick={() => {
                  props.reset();
                }}
              >
                Reset
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
    </Space>
  );
};
