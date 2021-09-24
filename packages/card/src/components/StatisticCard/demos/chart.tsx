import React from 'react';
import { EllipsisOutlined } from 'infra-design-icons';
import { StatisticCard } from 'infrad-pro-card';

export default () => {
  return (
    <StatisticCard
      title="Stock Trend"
      tip="Stock Description"
      style={{ maxWidth: 480 }}
      extra={<EllipsisOutlined />}
      chart={
        <img
          src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
          alt="Histogram"
          width="100%"
        />
      }
    />
  );
};
