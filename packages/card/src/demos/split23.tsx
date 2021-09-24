import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <ProCard split="vertical">
      <ProCard title="Left Area Detail" colSpan="30%">
        Left Area Content
      </ProCard>
      <ProCard title="Split Columns Card with Title" headerBordered>
        <div style={{ height: 360 }}>Right Area Content</div>
      </ProCard>
    </ProCard>
  );
};
