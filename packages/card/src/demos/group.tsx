import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <>
      <ProCard title="Card Group" ghost gutter={8} collapsible>
        <ProCard layout="center" bordered>
          Card Content
        </ProCard>
        <ProCard layout="center" bordered>
          Card Content
        </ProCard>
        <ProCard layout="center" bordered>
          Card Content
        </ProCard>
      </ProCard>
    </>
  );
};
