import React from 'react';
import { EllipsisOutlined } from 'infra-design-icons';
import { StatisticCard } from 'infrad-pro-card';

const { Statistic } = StatisticCard;

export default () => {
  return (
    <StatisticCard
      title="Overall Volume Score"
      extra={<EllipsisOutlined />}
      statistic={{
        value: 86.2,
        suffix: 'Score',
        description: <Statistic title="Rank Top" value="20%" />,
      }}
      chart={
        <img
          src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
          width="100%"
          alt="progress bar"
        />
      }
      footer={
        <>
          <Statistic
            value={15.1}
            title="Cumulative Registration"
            suffix="thousand"
            layout="horizontal"
          />
          <Statistic
            value={15.1}
            title="Current Month Registration"
            suffix="thousand"
            layout="horizontal"
          />
        </>
      }
      style={{ width: 250 }}
    />
  );
};
