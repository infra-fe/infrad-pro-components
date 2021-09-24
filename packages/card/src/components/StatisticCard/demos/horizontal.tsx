import React from 'react';
import { StatisticCard } from 'infrad-pro-card';

const { Statistic } = StatisticCard;

export default () => {
  return (
    <StatisticCard
      chartPlacement="right"
      statistic={{
        title: 'Frozen Amount',
        value: 112893,
        precision: 2,
        suffix: '元',
        description: (
          <>
            <Statistic title="Week over Week" value="6.47%" trend="up" />
            <Statistic title="Month over Month" value="6.47%" trend="down" />
          </>
        ),
      }}
      style={{ width: 584 }}
      chart={
        <img
          src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
          alt="Line Chart"
          width="100%"
        />
      }
    />
  );
};
