import React, { useState } from 'react';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
} from 'infrad-pro-form';
import { Button, message, Modal } from 'infrad';
import { PlusOutlined } from 'infra-design-icons';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        Create New StepsForm
      </Button>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          setVisible(false);
          message.success('Submit Successfully!');
        }}
        formProps={{
          validateMessages: {
            required: 'This is required!',
          },
        }}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              title="StepsForm"
              width={800}
              onCancel={() => setVisible(false)}
              visible={visible}
              footer={submitter}
              destroyOnClose
            >
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="Create Experiment"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            width="md"
            label="Experiment Name"
            tooltip="No longer than 24, this is unique id"
            placeholder="Please enter name"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="Date" />
          <ProForm.Group title="Time Select">
            <ProFormDateTimePicker name="dateTime" label="StartTime" />
            <ProFormDatePicker name="date" label="EndTime" />
          </ProForm.Group>
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="Please enter remark"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Setting Parameters">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Migration Type"
            width="lg"
            options={[
              'Structure Migration',
              'Complete Migration',
              'Incremental Migration',
              'Complete Verification',
            ]}
          />
          <ProForm.Group>
            <ProFormText width="md" name="db name" label="Business DB Username" />
            <ProFormDatePicker name="datetime" label="记录保存时间" width="sm" />
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'AsynchronousLOB', 'Limited LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Publish Experiment">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Deployment Unit"
            rules={[
              {
                required: true,
              },
            ]}
            options={['Deployment Unit One', 'Deployment Unit Two', 'Deployment Unit Two']}
          />
          <ProFormSelect
            label="Deploy Group Strategy"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            width="md"
            initialValue="1"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
          <ProFormSelect
            label="Pod Scheduling Strategy"
            name="remark2"
            width="md"
            initialValue="2"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};
