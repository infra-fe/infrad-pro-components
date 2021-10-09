import React from 'react';
import ProForm, {
  ProFormSwitch,
  ProFormText,
  ProFormRadio,
  ProFormCheckbox,
  ProFormRate,
  ProFormSelect,
  ProFormDigit,
  ProFormSlider,
  ProFormGroup,
} from 'infrad-pro-form';
import Mock from 'mockjs';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        name: 'qixian',
        radio: 'a',
        'radio-button': 'a',
      }}
      onValuesChange={(_, values) => {
        console.log(values);
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormGroup label="Text Type">
        <ProFormText width="md" name="name" label="name" />
        <ProFormText.Password width="md" name="password" label="password" />
      </ProFormGroup>
      <ProFormGroup
        label="Selectable Type"
        style={{
          gap: '0 32px',
        }}
      >
        <ProFormSelect
          name="select"
          label="Select"
          valueEnum={{
            china: 'China',
            usa: 'U.S.A',
          }}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />
        <ProFormSelect
          name="select2"
          label="Support Search & Query"
          showSearch
          request={async ({ keyWords }) => {
            await waitTime(1000);
            return Mock.mock({
              'data|1-10': [
                {
                  value: '@id',
                  label: '@name',
                },
              ],
            }).data.concat({
              value: keyWords,
              label: 'target',
            });
          }}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />
        <ProFormSelect
          width="md"
          fieldProps={{
            labelInValue: true,
          }}
          request={async () => [
            { label: 'All', value: 'all' },
            { label: 'Unsolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Solving', value: 'processing' },
          ]}
          name="useMode"
          label="Effective Way of Contract"
        />
        <ProFormSelect
          name="select-multiple"
          label="Select[multiple]"
          valueEnum={{
            red: 'Red',
            green: 'Green',
            blue: 'Blue',
          }}
          fieldProps={{
            mode: 'multiple',
          }}
          placeholder="Please select favorite colors"
          rules={[
            { required: true, message: 'Please select your favorite colors!', type: 'array' },
          ]}
        />

        <ProFormRadio.Group
          name="radio"
          label="Radio.Group"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormRadio.Group
          name="radio-vertical"
          layout="vertical"
          label="Radio.Group"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormRadio.Group
          name="radio-button"
          label="Radio.Button"
          radioType="button"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
      </ProFormGroup>
      <ProFormGroup label="Number Type">
        <ProFormDigit label="InputNumber" name="input-number" width="sm" min={1} max={10} />
        <ProFormSwitch name="switch" label="Switch" />
        <ProFormSlider
          name="slider"
          label="Slider"
          width="lg"
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
        <ProFormRate name="rate" label="Rate" />
      </ProFormGroup>
    </ProForm>
  </div>
);

export default Demo;
