import React, { useRef, useState } from 'react';
import { PlusOutlined } from 'infra-design-icons';
import { Button, Select, ConfigProvider, Space } from 'infrad';
import type { ProColumns, ActionType } from 'infrad-pro-table';
import ProTable from 'infrad-pro-table';
import moment from 'moment';
import enUSIntl from 'infrad/lib/locale/en_US';
import enGBIntl from 'infrad/lib/locale/en_GB';
import zhCNIntl from 'infrad/lib/locale/zh_CN';
import viVNIntl from 'infrad/lib/locale/vi_VN';
import itITIntl from 'infrad/lib/locale/it_IT';
import jaJPIntl from 'infrad/lib/locale/ja_JP';
import esESIntl from 'infrad/lib/locale/es_ES';
import ruRUIntl from 'infrad/lib/locale/ru_RU';
import srRSIntl from 'infrad/lib/locale/sr_RS';
import msMYIntl from 'infrad/lib/locale/ms_MY';
import zhTWIntl from 'infrad/lib/locale/zh_TW';
import frFRIntl from 'infrad/lib/locale/fr_FR';
import ptBRIntl from 'infrad/lib/locale/pt_BR';

const intlMap = {
  zhCNIntl,
  enUSIntl,
  enGBIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  ruRUIntl,
  srRSIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
};

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'index',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'name',
  },
  {
    title: 'Money',
    dataIndex: 'title',
    width: 100,
    valueType: 'money',
    renderText: () => (Math.random() * 100).toFixed(2),
  },
  {
    title: 'Created Time',
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'dateTime',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const [intl, setIntl] = useState('zhCNIntl');
  return (
    <ConfigProvider locale={intlMap[intl]}>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
        rowSelection={{}}
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle={
          <Space>
            <span>Basic Table</span>
            <Select<string>
              bordered={false}
              value={intl}
              onChange={(value) => {
                moment.locale(intlMap[value].locale);
                setIntl(value);
              }}
              options={Object.keys(intlMap).map((value) => ({ value, label: value }))}
            />
          </Space>
        }
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            New
          </Button>,
        ]}
      />
    </ConfigProvider>
  );
};
