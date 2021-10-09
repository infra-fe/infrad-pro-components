import React from 'react';
import {
  QueryFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
} from 'infrad-pro-form';

export default () => {
  return (
    <QueryFilter<{
      name: string;
      company: string;
    }>
      onFinish={async (values) => {
        console.log(values.name);
      }}
    >
      <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
      <ProFormText name="creater" label="Creator" />
      <ProFormSelect
        name="sex"
        label="Gender"
        showSearch
        valueEnum={{
          man: 'male',
          woman: 'female',
        }}
      />
      <ProFormText name="status" label="App Status" />
      <ProFormDatePicker name="startdate" label="Response Date" />
      <ProFormDateRangePicker name="create" label="Created Time" colSize={3} />
    </QueryFilter>
  );
};
