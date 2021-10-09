import React from 'react';
import { QueryFilter, ProFormText } from 'infrad-pro-form';

export default () => {
  return (
    <>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="sex" label="Gender" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="creater" label="Creator" />
        <ProFormText name="sex" label="Gender" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="creater" label="Creator" />
        <ProFormText name="sex" label="Gender" />
        <ProFormText name="status" label="App Status" />
        <ProFormText name="startdate" label="Response Time" />
        <ProFormText name="create" label="Created Time" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={12}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="creater" label="Creator" />
        <ProFormText name="sex" label="Gender" />
        <ProFormText name="status" label="App Status" />
        <ProFormText name="startdate" label="Response Date" />
        <ProFormText name="create" label="Created Time" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={8}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="creater" label="Creator" />
        <ProFormText name="sex" label="Gender" />
        <ProFormText name="status" label="App Status" />
        <ProFormText name="startdate" label="Response Date" />
        <ProFormText name="create" label="Created Time" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={4}
        defaultColsNumber={1}
        defaultCollapsed={false}
      >
        <ProFormText name="name" label="App Name" rules={[{ required: true }]} />
        <ProFormText name="creater" label="Creator" />
        <ProFormText name="sex" label="Gender" />
        <ProFormText name="status" label="App Status" />
        <ProFormText name="startdate" label="Response Date" />
        <ProFormText name="create" label="Created Time" colSize={3} />
      </QueryFilter>
    </>
  );
};
