import React from 'react';
import { StatisticCard } from 'infrad-pro-card';

const { Statistic } = StatisticCard;

export default () => {
  return (
    <StatisticCard
      chartPlacement="left"
      statistic={{
        title: 'Frozen Amount',
        value: 112893,
        precision: 2,
        suffix: 'yuan',
        description: (
          <>
            <Statistic title="Week over Week" value="6.47%" trend="up" />
            <Statistic title="Month over Month" value="6.47%" trend="down" />
          </>
        ),
      }}
      style={{ maxWidth: 584 }}
      chart={
        <img
          src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
          alt="折线图"
          width="100%"
        />
      }
    />
  );
};
