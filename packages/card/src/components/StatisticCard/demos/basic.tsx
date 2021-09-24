import React from 'react';
import { RightOutlined, EllipsisOutlined } from 'infra-design-icons';
import { StatisticCard } from 'infrad-pro-card';
import { Space } from 'infrad';

const { Statistic } = StatisticCard;

export default () => {
  return (
    <StatisticCard
      title={
        <Space>
          <span>Department 1</span>
          <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
        </Space>
      }
      extra={<EllipsisOutlined />}
      statistic={{
        value: 1102893,
        prefix: '¥',
        description: (
          <Space>
            <Statistic title="Actual Completion" value="82.3%" />
            <Statistic title="Current Target" value="¥6000" />
          </Space>
        ),
      }}
      chart={
        <>
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
            alt="chart"
            width="100%"
          />
        </>
      }
      style={{ width: 268 }}
    />
  );
};
