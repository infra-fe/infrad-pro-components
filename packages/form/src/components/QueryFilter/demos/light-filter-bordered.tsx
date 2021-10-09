import React from 'react';
import { FilterOutlined } from 'infra-design-icons';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from 'infrad-pro-form';

export default () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      bordered
      collapseLabel={<FilterOutlined />}
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        showSearch
        valueEnum={{
          man: 'male',
          woman: 'female',
        }}
        placeholder="gender"
      />
      <ProFormRadio.Group
        name="radio"
        radioType="button"
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
      <ProFormDatePicker name="time" placeholder="date" />
    </LightFilter>
  );
};
