import React from 'react';
import { Spin } from 'infrad';
import type { SpinProps } from 'infrad';

const PageLoading: React.FC<SpinProps & any> = ({
  isLoading,
  pastDelay,
  timedOut,
  error,
  retry,
  ...reset
}) => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" {...reset} />
  </div>
);

export default PageLoading;
