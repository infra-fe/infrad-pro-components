import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="tab1" tab="Product 1">
        Content 1
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="Product 2">
        Content 2
      </ProCard.TabPane>
    </ProCard>
  );
};
