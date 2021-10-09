import React from 'react';
import {
  LightFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormSwitch,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormTimePicker,
  ProFormDateTimeRangePicker,
  ProFormSlider,
  ProFormFieldSet,
} from 'infrad-pro-form';
import { Radio } from 'infrad';
import type { SizeType } from 'infrad/lib/config-provider/SizeContext';
import moment from 'moment';

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
        company: string;
      }>
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
          sex: [
            {
              value: 'open1',
              label: 'Open',
            },
            {
              value: 'closed2',
              label: 'Close',
            },
          ],
          datetimeRanger: [
            moment('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            moment('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            moment('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            moment('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async (values) => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="Gender"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: 'male',
            woman: 'female',
          }}
        />
        <ProFormSelect
          name="area"
          label="Area"
          mode="multiple"
          valueEnum={{
            beijing: 'Beijing',
            shanghai: 'Shanghai',
            hangzhou: 'Hangzhou',
            long: 'This is a very long item to test overflow effect',
          }}
        />
        <ProFormDigit name="count" label="Count" />
        <ProFormSlider name="range" label="Range" range />
        <ProFormText name="name1" label="Name" />
        <ProFormSwitch name="open" label="Switch" secondary />
        <ProFormText name="name2" label="Address" secondary />
        <ProFormDatePicker name="name3" label="Not allowed to clear" allowClear={false} />
        <ProFormDateRangePicker name="date" label="Date Range" />
        <ProFormDateTimePicker name="datetime" label="Date Time" />
        <ProFormDateTimeRangePicker name="datetimeRanger" label="Date Time Range" />
        <ProFormTimePicker name="time" label="Time" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="Time Range" />
        <ProFormFieldSet name="name" label="Name">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};
