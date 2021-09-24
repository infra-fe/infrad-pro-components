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
        title="Split Column with Title"
        extra="2019-09-28"
        split={responsive ? 'horizontal' : 'vertical'}
        bordered
        headerBordered
      >
        <ProCard title="Left Area Detail" colSpan="50%">
          <div style={{ height: 360 }}>Left Area Content</div>
        </ProCard>
        <ProCard title="Volume Occupancy">
          <div style={{ height: 360 }}>Right Area Content</div>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
