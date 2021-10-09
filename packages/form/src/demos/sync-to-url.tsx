import React from 'react';
import { message } from 'infrad';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormDatePicker,
} from 'infrad-pro-form';

export default () => {
  return (
    <ProForm
      onFinish={async () => {
        message.success('Submit Successfully!');
      }}
      syncToUrl={(values, type) => {
        if (type === 'get') {
          // 为了配合 transform
          // startTime 和 endTime 拼成 createTimeRanger
          return {
            ...values,
            createTimeRanger:
              values.startTime || values.endTime ? [values.startTime, values.endTime] : undefined,
          };
        }
        // expirationTime 不同步到 url
        return {
          ...values,
          expirationTime: undefined,
        };
      }}
      initialValues={{
        name: 'Ant Design Limited Company',
        useMode: 'chapter',
      }}
    >
      <ProFormText
        width="md"
        name="name"
        label="Signed Customer Name"
        tooltip="No longer than 24"
        placeholder="Please enter name"
      />
      <ProFormDateRangePicker
        transform={(values) => {
          return {
            startTime: values ? values[0] : undefined,
            endTime: values ? values[1] : undefined,
          };
        }}
        width="md"
        name="createTimeRanger"
        label="Contract Effective Time"
      />

      <ProFormDatePicker width="md" name="expirationTime" label="Contract Expiration Time" />
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: 'Effective after Stamping',
          },
        ]}
        width="sm"
        name="useMode"
        label="Effective Way of Contract"
      />
    </ProForm>
  );
};
