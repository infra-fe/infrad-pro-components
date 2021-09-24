import React, { useState } from 'react';
import { StatisticCard } from 'infrad-pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <StatisticCard.Group title="Core Indicators" direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: 'UV Today',
            tip: 'Supplier Info',
            value: 79,
            precision: 2,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Frozen Amount',
            value: 112893,
            precision: 2,
            suffix: 'yuan',
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Info Completion',
            value: 92,
            suffix: '/ 100',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Frozen Amount',
            value: 112893,
            precision: 2,
            suffix: 'yuan',
          }}
        />
      </StatisticCard.Group>
    </RcResizeObserver>
  );
};
