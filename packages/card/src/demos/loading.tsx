import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <>
      <ProCard loading style={{ maxWidth: 300 }}>
        Content
      </ProCard>

      <ProCard loading style={{ maxWidth: 300, marginTop: 16 }} layout="center">
        Content
      </ProCard>

      <ProCard
        title="Customized Loading"
        extra="extra"
        loading={<div>Loading</div>}
        style={{ maxWidth: 300, marginTop: 16 }}
      >
        Content
      </ProCard>
    </>
  );
};
