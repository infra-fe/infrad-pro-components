import React, { useState } from 'react';
import { Steps, Button, Space } from 'infrad';
import ProCard from 'infrad-pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard split={responsive ? 'horizontal' : 'vertical'} bordered style={{ height: 320 }}>
        <ProCard colSpan={responsive ? 24 : 6}>
          <Steps
            direction={responsive ? 'horizontal' : 'vertical'}
            size="small"
            current={current}
            style={{ height: '100%' }}
          >
            <Step title="Fill in Basic Info" />
            <Step title="Dispose Template" />
            <Step title="Dispose Visit" />
            <Step title="Dispose Deployment & Dispatch" />
            <Step title="Preview" />
          </Steps>
        </ProCard>
        <ProCard title="Volume Occupation" colSpan={responsive ? 24 : 18}>
          <Space>
            <Button
              key="primary"
              type="primary"
              onClick={() => setCurrent(current + 1)}
              disabled={current === 5}
            >
              Next
            </Button>
            <Button key="pre" onClick={() => setCurrent(current - 1)} disabled={current === 0}>
              Prev
            </Button>
          </Space>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
