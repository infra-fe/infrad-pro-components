import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <>
      <ProCard title="Default Size" extra="extra" tooltip="This is tip" style={{ maxWidth: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="Small Size"
        extra="extra"
        tooltip="This is tip"
        style={{ maxWidth: 300, marginTop: 24 }}
        size="small"
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
