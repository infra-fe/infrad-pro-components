// 主要处理新建和编辑的场景

import type { Moment } from 'moment';
import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import type { ProFormInstance } from 'infrad-pro-form';
import { ProFormDateRangePicker, ProFormSelect, ProFormText, StepsForm } from 'infrad-pro-form';

type FormValue = {
  jobInfo: {
    name: string;
    type: number;
  };
  syncTableInfo: {
    timeRange: [Moment, Moment];
    title: string;
  };
};
const formValue: FormValue = {
  jobInfo: {
    name: 'normal job',
    type: 1,
  },
  syncTableInfo: {
    timeRange: [moment().subtract('month'), moment()],
    title: 'example table title',
  },
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formValue);
    }, time);
  });
};
const jobType = [
  {
    value: 1,
    label: 'State-owned Enterprise',
  },
  {
    value: 2,
    label: ' Private Enterprise',
  },
];
const EditExample = () => {
  const formMapRef = useRef<React.MutableRefObject<ProFormInstance<any> | undefined>[]>([]);
  useEffect(() => {
    waitTime(1000).then(() => {
      // 编辑场景下需要使用formMapRef循环设置formData
      formMapRef.current.forEach((formInstanceRef) => {
        formInstanceRef.current?.setFieldsValue(formValue);
      });
    });
  }, []);

  return (
    <StepsForm
      formMapRef={formMapRef}
      onFinish={(values) => {
        console.log(values);
        return Promise.resolve(true);
      }}
    >
      <StepsForm.StepForm name="step1" title="Job Info">
        <ProFormText label="Name" name={['jobInfo', 'name']} />
        <ProFormSelect label="Job Type" name={['jobInfo', 'type']} options={jobType} />
      </StepsForm.StepForm>
      <StepsForm.StepForm name="step2" title={'Synchronous Form Info'}>
        <ProFormDateRangePicker label="Time Range" name={['syncTableInfo', 'timeRange']} />
        <ProFormText label="Title" name={['syncTableInfo', 'title']} />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default EditExample;
