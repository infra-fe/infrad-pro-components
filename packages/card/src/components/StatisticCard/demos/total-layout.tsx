import React, { useState } from 'react';
import ProCard, { StatisticCard } from 'infrad-pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard split={responsive ? 'horizontal' : 'vertical'}>
        <StatisticCard
          colSpan={responsive ? 24 : 6}
          title="Fiscal Year Performance Target"
          statistic={{
            value: 82.6,
            suffix: '100 million',
            description: <Statistic title="Day over Day" value="6.47%" trend="up" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
              alt="Progress Bar"
              width="100%"
            />
          }
          footer={
            <>
              <Statistic
                value="70.98%"
                title="Fiscal Year Performance Completion Rate"
                layout="horizontal"
              />
              <Statistic
                value="86.98%"
                title="Last Year Performance Completion Rate"
                layout="horizontal"
              />
              <Statistic
                value="88.98%"
                title="The Year before Last Performance Completion Rate"
                layout="horizontal"
              />
            </>
          }
        />
        <StatisticCard.Group
          colSpan={responsive ? 24 : 18}
          direction={responsive ? 'column' : undefined}
        >
          <StatisticCard
            statistic={{
              title: 'Fiscal Year Income',
              value: 601987768,
              description: <Statistic title="Day over Day" value="6.15%" trend="up" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="Line Chart"
                width="100%"
              />
            }
          >
            <Statistic
              title="Stock Income"
              value={1982312}
              layout="vertical"
              description={<Statistic title="Day over Day" value="6.15%" trend="down" />}
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Daily Rank',
              value: 6,
              description: <Statistic title="Day over Day" value="3.85%" trend="down" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="Line Chart"
                width="100%"
              />
            }
          >
            <Statistic
              title="Income in the Last Seven Days"
              value={17458}
              layout="vertical"
              description={<Statistic title="Day over Day" value="6.47%" trend="up" />}
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: 'Fiscal Year Performance Income Rank',
              value: 2,
              description: <Statistic title="Day over Day" value="6.47%" trend="up" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="Line Chart"
                width="100%"
              />
            }
          >
            <Statistic
              title="Month Payment Count"
              value={601}
              layout="vertical"
              description={<Statistic title="Day over Day" value="6.47%" trend="down" />}
            />
          </StatisticCard>
        </StatisticCard.Group>
      </ProCard>
    </RcResizeObserver>
  );
};
