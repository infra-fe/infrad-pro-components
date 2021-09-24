import React from 'react';
import { StatisticCard } from 'infrad-pro-card';

const { Operation } = StatisticCard;

export default () => {
  return (
    <StatisticCard.Group>
      <StatisticCard
        statistic={{
          title: 'Service Grid Count',
          value: 500,
        }}
      />
      <Operation>=</Operation>
      <StatisticCard
        statistic={{
          title: 'Unpublished',
          value: 234,
        }}
      />
      <Operation>+</Operation>
      <StatisticCard
        statistic={{
          title: 'Publishing',
          value: 112,
        }}
      />
      <Operation>+</Operation>
      <StatisticCard
        statistic={{
          title: 'Published',
          value: 255,
        }}
      />
    </StatisticCard.Group>
  );
};
