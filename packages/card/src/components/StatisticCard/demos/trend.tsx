import React from 'react';
import { StatisticCard } from 'infrad-pro-card';

const { Statistic } = StatisticCard;

export default () => {
  return (
    <>
      <StatisticCard style={{ width: 160 }}>
        <Statistic title="Day over Day" value="7.60%" trend="up" />
        <Statistic title="Week over Week" value="7.60%" trend="down" />
        <Statistic title="Week over Week" value="0.00%" />
      </StatisticCard>
    </>
  );
};
