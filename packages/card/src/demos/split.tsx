import React, { useState } from 'react';
import ProCard from 'infrad-pro-card';
import RcResizeObserver from 'rc-resize-observer';

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="Complex Split"
        extra="2019-09-28"
        bordered
        headerBordered
        split={responsive ? 'horizontal' : 'vertical'}
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split={responsive ? 'horizontal' : 'vertical'}>
              <ProCard title="Yesterday Total Volume">123</ProCard>
              <ProCard title="Current Month Total Volume">234</ProCard>
              <ProCard title="This Year Total Volume">345</ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="Running Test">12/56</ProCard>
              <ProCard title="History Test Count">134 个</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="Volume Trend">
            <div>chart</div>
            <div>chart</div>
            <div>chart</div>
            <div>chart</div>
            <div>chart</div>
          </ProCard>
        </ProCard>
        <ProCard title="Volume Occupancy">Right Area Content</ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
