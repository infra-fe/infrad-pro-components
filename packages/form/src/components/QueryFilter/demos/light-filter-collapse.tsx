import React from 'react';
import { LightFilter, ProFormSelect, ProFormDateTimePicker } from 'infrad-pro-form';

export default () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      collapse
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        label="Gender"
        showSearch
        valueEnum={{
          man: 'male',
          woman: 'female',
        }}
      />
      <ProFormDateTimePicker name="time" label="date" />
    </LightFilter>
  );
};
