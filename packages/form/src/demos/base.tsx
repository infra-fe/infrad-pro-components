import React from 'react';
import { message } from 'infrad';
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from 'infrad-pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submit Successfully！');
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
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          addonBefore={<a>How to get customer name ?</a>}
          addonAfter={<a>Click to see more</a>}
          label="Signed Customer Name"
          tooltip="No longer than 24"
          placeholder="Please enter the name"
        />
        <ProFormText
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter the name"
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="Contract Title"
          placeholder="Please enter the name"
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
          label="Contractual Expiration Method"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="Main contract number" />
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
    </ProForm>
  );
};
