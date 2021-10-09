import React, { useRef } from 'react';
import { Button, message } from 'infrad';
import ProForm, {
  DrawerForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
} from 'infrad-pro-form';
import { PlusOutlined } from 'infra-design-icons';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const formRef = useRef();
  return (
    <DrawerForm<{
      name: string;
      company: string;
    }>
      title="Create New Form"
      formRef={formRef}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Create New Form
        </Button>
      }
      drawerProps={{
        forceRender: true,
        destroyOnClose: true,
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Submit Successfully!');
        // 不返回不会关闭弹框
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          name="name"
          width="md"
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
          width="md"
          name="contract"
          label="Contract Title"
          placeholder="Please enter name"
        />
        <ProFormDateRangePicker name="contractTime" label="Contract Effective Time" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: 'Effective after Stamping',
            },
          ]}
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
      <ProFormText name="project" disabled label="Project Name" initialValue="Project xxxx" />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="Business Manger"
        initialValue="QiTu"
      />
    </DrawerForm>
  );
};
