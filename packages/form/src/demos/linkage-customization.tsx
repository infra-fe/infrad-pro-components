import React, { useState } from 'react';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
  ProFormDependency,
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
  const [loading, setLoading] = useState(false);
  return (
    <ProCard>
      <StepsForm
        onFinish={async () => {
          setLoading(true);
          await waitTime(1000);
          message.success('Submit Successfully!');
          setLoading(false);
        }}
        submitter={{
          render: ({ form, onSubmit, step, onPre }) => {
            return [
              <Button
                key="rest"
                onClick={() => {
                  form?.resetFields();
                }}
              >
                Reset
              </Button>,
              step > 0 && (
                <Button
                  key="pre"
                  onClick={() => {
                    onPre?.();
                  }}
                >
                  Prev
                </Button>
              ),
              <Button
                key="next"
                loading={loading}
                type="primary"
                onClick={() => {
                  onSubmit?.();
                }}
              >
                Next
              </Button>,
            ];
          },
        }}
        formProps={{
          validateMessages: {
            required: 'This is required!',
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="Create Experiment"
          onFinish={async () => {
            setLoading(true);
            await waitTime(2000);
            setLoading(false);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="Experiment Name"
            width="md"
            tooltip="No longer than 24, this is the unique id"
            placeholder="Please enter name"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDateRangePicker name="dateTime" label="Time Zone" />
          <ProFormTextArea
            name="remark"
            label="Remark"
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
              'Complete Calibration',
            ]}
          />
          <ProForm.Group>
            <ProFormText name="dbName" label="Business DB Username" />
            <ProFormDatePicker name="datetime" label="Record Retention Time" width="sm" />
          </ProForm.Group>
          <ProFormDependency name={['dbName']}>
            {({ dbName }) => {
              return (
                <ProFormCheckbox.Group
                  name="checkbox"
                  label="Migration Type"
                  options={
                    dbName ? ['Complete LOB', 'Asynchronous LOB', 'Limited LOB'] : ['Complete LOB']
                  }
                />
              );
            }}
          </ProFormDependency>
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
            width="md"
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
            initialValue="2"
            width="md"
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
