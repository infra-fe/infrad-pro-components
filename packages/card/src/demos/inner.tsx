import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <>
      <ProCard title="Horizontal Inner Card" bordered headerBordered gutter={16}>
        <ProCard title="Card Title" type="inner" bordered>
          Card Content
        </ProCard>
        <ProCard title="Card Title" type="inner" bordered>
          Card Content
        </ProCard>
      </ProCard>

      <ProCard
        title="Vertical Inner Card"
        bordered
        headerBordered
        direction="column"
        gutter={[0, 16]}
        style={{ marginTop: 8 }}
      >
        <ProCard title="Card Title" type="inner" bordered>
          Card Content
        </ProCard>
        <ProCard title="Card Title" type="inner" bordered>
          Card Content
        </ProCard>
      </ProCard>
    </>
  );
};
