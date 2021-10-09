import React, { useState } from 'react';
import { message } from 'infrad';
import ProForm, { ProFormText } from 'infrad-pro-form';
import type { ProColumns } from 'infrad-pro-table';
import { EditableProTable } from 'infrad-pro-table';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: 'Activity Name One',
    decs: 'This Activity is fun',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: 'Activity Name Two',
    decs: 'This Activity is fun',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: 'Activity Name',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: 'Total', status: 'Default' },
      open: {
        text: 'Unsolved',
        status: 'Error',
      },
      closed: {
        text: 'Resolved',
        status: 'Success',
      },
    },
  },
  {
    title: 'Description',
    dataIndex: 'decs',
  },
  {
    title: 'Manipulation',
    valueType: 'option',
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  return (
    <ProForm<{
      name: string;
      company: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submit Successfully!');
      }}
      initialValues={{
        name: 'Ant Design Limited Company',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="Signed Customer Name"
          tooltip="No longer than 24"
          placeholder="Please enter name"
        />
        <ProFormText
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter name"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="Main Contract Number" />
      <ProForm.Item
        label="Array Data"
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'top',
            record: () => ({
              id: Date.now(),
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
  );
};
