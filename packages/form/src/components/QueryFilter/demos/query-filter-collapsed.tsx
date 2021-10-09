import React from 'react';
import { QueryFilter, ProFormText, ProFormDatePicker } from 'infrad-pro-form';

export default () => {
  return (
    <QueryFilter defaultCollapsed>
      <ProFormText name="name" label="App Name" />
      <ProFormDatePicker name="createDate" label="Created Time" />
      <ProFormText name="status" label="App Status" />
      <ProFormDatePicker name="replyDate" label="Response Date" />
      <ProFormDatePicker name="enddate" label="Finished Time" />
    </QueryFilter>
  );
};
