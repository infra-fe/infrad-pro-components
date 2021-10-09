import ProForm, {
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormTimePicker,
} from 'infrad-pro-form';
import React from 'react';

export default () => {
  return (
    <ProForm
      initialValues={{
        date: Date.now(),
        dateWeek: Date.now(),
        dateMonth: Date.now(),
        dateQuarter: Date.now(),
        dateYear: Date.now(),
        dateTime: Date.now(),
        dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
      }}
    >
      <ProForm.Group title="Date Related Group">
        <ProFormDatePicker name="date" label="Date" />
        <ProFormDatePicker
          name="date"
          fieldProps={{
            format: 'YY-MM',
          }}
          label="Year & Month"
        />
        <ProFormTimePicker name="time" label="Time" />
        <ProFormTimePicker.RangePicker name="timeRange" label="Time Zone" />
        <ProFormDatePicker.Week name="dateWeek" label="Week" />
        <ProFormDatePicker.Month name="dateMonth" label="Month" />
        <ProFormDatePicker.Quarter name="dateQuarter" label="Quarter" />
        <ProFormDatePicker.Year name="dateYear" label="Year" />
        <ProFormDateTimePicker name="dateTime" label="Date Time" />
        <ProFormDateRangePicker name="dateRange" label="Date Range" />
        <ProFormDateTimeRangePicker name="dateTimeRange" label="Date Time Zone" />
      </ProForm.Group>

      <ProForm.Group title="Read only">
        <ProFormDatePicker readonly name="date" label="Date" />
        <ProFormDatePicker.Week readonly name="dateWeek" label="Week" />
        <ProFormDatePicker.Month readonly name="dateMonth" label="Month" />
        <ProFormDatePicker.Quarter readonly name="dateQuarter" label="Quarter" />
        <ProFormDatePicker.Year readonly name="dateYear" label="Year" />
        <ProFormDateTimePicker readonly name="dateTime" label="Date Time" />
        <ProFormDateRangePicker readonly name="dateRange" label="Date Range" />
        <ProFormDateTimeRangePicker readonly name="dateTimeRange" label="Date Time Zone" />
      </ProForm.Group>
    </ProForm>
  );
};
