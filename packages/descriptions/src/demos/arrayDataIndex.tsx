import React, { useRef } from 'react';
import { Button } from 'infrad';

import type { ProDescriptionsActionType } from 'infrad-pro-descriptions';
import ProDescriptions from 'infrad-pro-descriptions';

export default () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ProDescriptions
      actionRef={actionRef}
      title="高级定义列表 request"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            info: {
              id: '这是一段文本',
              date: '20200730',
              money: '12121',
            },
          },
        });
      }}
      editable={{
        onSave: async (keypath, newInfo, oriInfo) => {
          console.log(keypath, newInfo, oriInfo);
          return true;
        },
      }}
    >
      <ProDescriptions.Item dataIndex={['info', 'id']} />
      <ProDescriptions.Item dataIndex={['info', 'date']} label="日期" valueType="date" />
      <ProDescriptions.Item label="money" dataIndex={['info', 'money']} valueType="money" />
      <ProDescriptions.Item label="文本" valueType="option">
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.reload();
          }}
          key="reload"
        >
          刷新
        </Button>
        <Button key="rest">重置</Button>
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};
