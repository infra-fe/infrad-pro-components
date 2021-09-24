import React from 'react';
import ProCard, { StatisticCard } from 'infrad-pro-card';
import type { StatisticProps } from 'infrad-pro-card';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: 'Total', value: 10, total: true },
  { key: '2', status: 'default', title: 'Unpublished', value: 5 },
  { key: '3', status: 'processing', title: 'Publishing', value: 3 },
  { key: '4', status: 'error', title: 'Publish Error', value: 1 },
  { key: '5', status: 'success', title: 'Publish Success', value: 1 },
];

export default () => {
  return (
    <ProCard
      tabs={{
        onChange: (key) => {
          console.log('key', key);
        },
      }}
    >
      {items.map((item) => (
        <ProCard.TabPane
          style={{ width: '100%' }}
          key={item.key}
          tab={
            <Statistic
              layout="vertical"
              title={item.title}
              value={item.value}
              status={item.status as StatisticProps['status']}
              style={{ width: 120, borderRight: item.total ? '1px solid #f0f0f0' : undefined }}
            />
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fafafa',
              height: 100,
            }}
          >
            Related Exhibition Content{item.title}
          </div>
        </ProCard.TabPane>
      ))}
    </ProCard>
  );
};
