import React from 'react';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormCheckbox,
  ProFormDigit,
} from 'infrad-pro-form';

import ProCard from 'infrad-pro-card';
import { message } from 'infrad';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <>
      <StepsForm
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
      >
        <StepsForm.StepForm
          name="base"
          title="First Step"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProCard
            title="Source & Target"
            bordered
            headerBordered
            collapsible
            style={{
              marginBottom: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
            <ProFormText
              name="name"
              width="md"
              label="Migration Task Name"
              tooltip="No longer than 24, this is unique id"
              placeholder="Please enter name"
              rules={[{ required: true }]}
            />
            <ProForm.Group title="Node" size={8}>
              <ProFormSelect width="sm" name="source" placeholder="Please choose source node" />
              <ProFormSelect width="sm" name="target" placeholder="Please choose target node" />
            </ProForm.Group>
          </ProCard>

          <ProCard
            title="Align Top"
            bordered
            headerBordered
            collapsible
            style={{
              minWidth: 800,
              marginBottom: 16,
            }}
          >
            <ProFormDigit
              name="xs"
              label="Size XS Form"
              initialValue={9999}
              tooltip="Suspended Bubble"
              placeholder="Please enter name"
              width="xs"
            />
            <ProFormText name="s" label="Size S Form" placeholder="Please enter name" width="sm" />
            <ProFormDateRangePicker name="m" label="Size M Form" />
            <ProFormSelect
              name="l"
              label="Size L Form"
              fieldProps={{
                mode: 'tags',
              }}
              width="lg"
              initialValue={['Jiahao Wu', 'Xingxing Zhou']}
              options={['Jiahao Wu', 'Xingxing Zhou', 'Lafeng Chen'].map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Second Step">
          <ProCard
            style={{
              minWidth: 800,
              marginBottom: 16,
              maxWidth: '100%',
            }}
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
              <ProFormText name="db name" label="Business DB Username" />
              <ProFormDatePicker name="datetime" label="Record Retention Time" width="sm" />
            </ProForm.Group>
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Asynchronous LOB', 'Limited LOB']}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Third Step">
          <ProCard
            style={{
              marginBottom: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
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
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};
