import React from 'react';
import {
  QueryFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormRadio,
  ProFormCheckbox,
} from 'infrad-pro-form';

export default () => {
  return (
    <QueryFilter layout="vertical">
      <ProFormText name="name" label="This is a very long name" />
      <ProFormDatePicker name="birth" label="Created Time" />
      <ProFormText name="sex" label="App Status" />
      <ProFormRadio.Group
        name="freq"
        label="Query Frequency"
        options={[
          {
            value: 'weekly',
            label: 'weekly',
          },
          {
            value: 'quarterly',
            label: 'quarterly',
          },
          {
            value: 'monthly',
            label: 'monthly',
          },
          {
            value: 'yearly',
            label: 'yearly',
          },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="Industry Distribution"
        options={['Agriculture', 'Manufacturing', 'Internet']}
      />
    </QueryFilter>
  );
};
