import React, { useState } from 'react';
import type { ProCardTabsProps } from 'infrad-pro-card';
import ProCard from 'infrad-pro-card';
import { Space, Select } from 'infrad';

const { Option } = Select;

export default () => {
  const [tab, setTab] = useState('tab2');
  const [tabPosition, setTabPosition] = useState<ProCardTabsProps['tabPosition']>('top');

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        Tab position：
        <Select
          value={tabPosition}
          onChange={(value) => setTabPosition(value)}
          dropdownMatchSelectWidth={false}
        >
          <Option value="top">top</Option>
          <Option value="bottom">bottom</Option>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </Space>
      <ProCard
        tabs={{
          tabPosition,
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab1" tab="Product 1">
          Content 1
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="Produect 2">
          Content 2
        </ProCard.TabPane>
      </ProCard>
    </div>
  );
};
