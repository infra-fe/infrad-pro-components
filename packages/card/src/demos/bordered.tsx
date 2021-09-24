import React from 'react';
import ProCard from 'infrad-pro-card';

export default () => {
  return (
    <ProCard title="Title" extra="extra" tooltip="This is tip" style={{ maxWidth: 300 }} bordered>
      content
    </ProCard>
  );
};
