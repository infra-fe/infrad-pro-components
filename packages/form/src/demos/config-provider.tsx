import { ConfigProvider, Input } from 'infrad';
import enUS from 'infrad/lib/locale/en_US';
import ProForm, {
  StepsForm,
  ProFormSwitch,
  ProFormRadio,
  ProFormCheckbox,
  ProFormUploadButton,
  ProFormField,
  ProFormSlider,
  ProFormUploadDragger,
  ProFormText,
} from 'infrad-pro-form';
import React from 'react';
import { SmileOutlined } from 'infra-design-icons';
import LightWrapper from '../BaseForm/LightWrapper';

export default () => (
  <ConfigProvider locale={enUS}>
    <StepsForm>
      <StepsForm.StepForm title="Create">
        <ProFormText name="name" />
      </StepsForm.StepForm>
    </StepsForm>

    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="Click to Upload"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="Whether to  Open" />
      <ProFormUploadDragger
        title="Drag to Upload"
        icon={<SmileOutlined />}
        description="Support Text Format"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <LightWrapper valuePropName="value">test</LightWrapper>
      <LightWrapper valuePropName="value">test</LightWrapper>
      <ProFormSlider name="range" label="Range" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
    </ProForm>
  </ConfigProvider>
);
