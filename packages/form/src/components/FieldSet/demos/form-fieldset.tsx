﻿import ProForm, {
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
      <ProForm.Item label="互相依赖的表单">
        <ProFormDependency name={['list']}>
          {({ list }) => {
            return <div>{JSON.stringify(list, null, 2)}</div>;
          }}
        </ProFormDependency>
      </ProForm.Item>
      <ProFormFieldSet name="list" label="组件列表">
        <ProFormText width="md" />
        <ProFormSelect
          width="md"
          request={async () => [
            { label: '全部', value: 'all' },
            { label: '未解决', value: 'open' },
            { label: '已解决', value: 'closed' },
            { label: '解决中', value: 'processing' },
          ]}
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list"
        label="组件列表- Input.Group"
        type="group"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        <ProFormText width="md" />
        <ProFormText width="md" />
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list"
        label="组件列表"
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
