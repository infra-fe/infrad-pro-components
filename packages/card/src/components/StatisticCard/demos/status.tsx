import React from 'react';
import { StatisticCard } from 'infrad-pro-card';

const { Divider } = StatisticCard;

export default () => {
  return (
    <StatisticCard.Group>
      <StatisticCard
        statistic={{
          title: 'Total',
          tip: 'Help Text',
          value: 10,
        }}
      />
      <Divider />
      <StatisticCard
        statistic={{
          title: 'Unpublished',
          value: 5,
          status: 'default',
        }}
      />
      <StatisticCard
        statistic={{
          title: 'Publishing',
          value: 3,
          status: 'processing',
        }}
      />
      <StatisticCard
        statistic={{
          title: 'Publish Error',
          value: 2,
          status: 'error',
        }}
      />
      <StatisticCard
        statistic={{
          title: 'Publish Success',
          value: '-',
          status: 'success',
        }}
      />
    </StatisticCard.Group>
  );
};
