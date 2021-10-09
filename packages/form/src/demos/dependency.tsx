import React from 'react';
import { Form, message } from 'infrad';
import ProForm, { ProFormText, ProFormSelect, ProFormDependency } from 'infrad-pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submit Successfully!');
      }}
      initialValues={{
        name: 'Ant Design Limited Company',
        name2: 'Ant Design Group',
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
      <ProFormText
        width="md"
        name={['name2', 'text']}
        label="Signed Customer Name"
        tooltip="No longer than 24"
        placeholder="Please enter name"
      />
      {/*  ProFormDependency 会自动注入并且 进行 shouldUpdate 的比对  */}
      <ProFormDependency name={['name', ['name2', 'text']]}>
        {({ name, name2 }) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after Stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`《${name || ''}》 and 《${name2?.text || ''}》Effective Way of Contract`}
            />
          );
        }}
      </ProFormDependency>
      {/* noStyle shouldUpdate 是必选的，写了 name 就会失效 */}
      <Form.Item noStyle shouldUpdate>
        {(form) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after Stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`with《${form.getFieldValue('name')}》Effective Way of Contract`}
            />
          );
        }}
      </Form.Item>
    </ProForm>
  );
};
