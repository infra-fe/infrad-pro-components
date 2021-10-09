import ProForm, {
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from 'infrad-pro-form';
import React from 'react';

export default () => {
  return (
    <ProForm
      initialValues={{
        list: ['1', '2', '3'],
      }}
    >
      <ProForm.Item label="Related Form">
        <ProFormDependency name={['list']}>
          {({ list }) => {
            return <div>{JSON.stringify(list, null, 2)}</div>;
          }}
        </ProFormDependency>
      </ProForm.Item>
      <ProFormFieldSet name="list" label="Components List">
        <ProFormText width="md" />
        <ProFormSelect
          width="md"
          request={async () => [
            { label: 'All', value: 'all' },
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Solving', value: 'processing' },
          ]}
          name="useMode"
          label="Effective Way of Contract"
        />
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list"
        label="Components List - Input.Group"
        type="group"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        <ProFormText width="md" />
        <ProFormText width="md" />
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list"
        label="Components List"
        readonly
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        <ProFormText width="md" readonly />
        -
        <ProFormText width="md" readonly />
        -
        <ProFormText width="md" readonly />
      </ProFormFieldSet>
    </ProForm>
  );
};
