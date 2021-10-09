import React from 'react';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from 'infrad-pro-form';
import ProCard from 'infrad-pro-card';
import { Button, message } from 'infrad';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('Submit Successfully!');
        }}
        formProps={{
          validateMessages: {
            required: 'This is required!',
          },
        }}
        submitter={{
          render: (props) => {
            if (props.step === 0) {
              return (
                <Button type="primary" onClick={() => props.onSubmit?.()}>
                  Go to Second Step {'>'}
                </Button>
              );
            }

            if (props.step === 1) {
              return [
                <Button key="pre" onClick={() => props.onPre?.()}>
                  Back to First Step
                </Button>,
                <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
                  Go to Third Step {'>'}
                </Button>,
              ];
            }

            return [
              <Button key="gotoTwo" onClick={() => props.onPre?.()}>
                {'<'} Back to Second Step
              </Button>,
              <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
                Submit √
              </Button>,
            ];
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="Create Experiment"
          onFinish={async ({ name }) => {
            console.log(name);
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="Experiment Name"
            width="md"
            tooltip="No longer than 24, this is unique id"
            placeholder="Please enter name"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDateRangePicker name="dateTime" label="Time Range" />
          <ProFormTextArea
            name="remark"
            label="Remark"
            width="lg"
            placeholder="Please enter remark"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="Setting Parameters"
        >
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
            <ProFormText name="dbname" label="Business DB Username" />
            <ProFormDatePicker name="datetime" label="Record Retention Time" width="sm" />
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Asynchronous LOB', 'Limited LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Deployment Unit"
            rules={[
              {
                required: true,
              },
            ]}
            options={['Deployment Unit One', 'Deployment Unit Two', 'Deployment Unit Three']}
          />
          <ProFormSelect
            label="Deployment Group Strategy"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: '1',
                label: ' Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
          <ProFormSelect
            label="Pod Scheduling Strategy"
            name="remark2"
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
    </ProCard>
  );
};
