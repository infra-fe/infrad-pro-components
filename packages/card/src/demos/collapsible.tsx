import React, { useState } from 'react';
import { Button } from 'infrad';
import { RightOutlined } from 'infra-design-icons';
import ProCard from 'infrad-pro-card';

export default () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <ProCard
        title="Collapsible"
        headerBordered
        collapsible
        defaultCollapsed
        onCollapse={(collapse) => console.log(collapse)}
        extra={
          <Button
            size="small"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Submit
          </Button>
        }
      >
        Content
      </ProCard>
      <ProCard
        title="Collapsible-Customized"
        extra={
          <RightOutlined
            rotate={!collapsed ? 90 : undefined}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        }
        style={{ marginTop: 16 }}
        headerBordered
        collapsed={collapsed}
      >
        Content
      </ProCard>
    </>
  );
};
