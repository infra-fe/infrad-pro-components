import React, { useRef } from 'react';

import { SmileOutlined } from 'infra-design-icons';
import ProForm, {
  ProFormSwitch,
  ProFormRadio,
  ProFormCheckbox,
  ProFormUploadButton,
  ProFormField,
  ProFormSlider,
  ProFormUploadDragger,
} from 'infrad-pro-form';
import { Button, Input } from 'infrad';

const Demo = () => {
  const formRef = useRef();
  return (
    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      formRef={formRef}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="Click to  Upload"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="Whether  to Open" />
      <ProFormUploadDragger
        title="Drag to Upload"
        icon={<SmileOutlined />}
        description="Support test format"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <ProFormSlider name="range" label="Range" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
      <ProForm.Item>
        <Button>View the number of records</Button>
        <span>200 in Total</span>
      </ProForm.Item>
    </ProForm>
  );
};

export default Demo;
