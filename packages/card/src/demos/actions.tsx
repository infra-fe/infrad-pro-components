import React from 'react';
import ProCard from 'infrad-pro-card';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from 'infra-design-icons';

export default () => {
  return (
    <>
      <ProCard
        title="Actions Manipulate Items"
        style={{ maxWidth: 300 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
