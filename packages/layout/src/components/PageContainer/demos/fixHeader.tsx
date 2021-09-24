import React from 'react';
import { PageContainer } from 'infrad-pro-layout';
import ProCard from 'infrad-pro-card';

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      fixedHeader
      header={{
        title: 'Page Title',
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'Page Level 1',
            },
            {
              path: '',
              breadcrumbName: 'Page Level 2',
            },
            {
              path: '',
              breadcrumbName: 'Page Level 3',
            },
          ],
        },
      }}
      tabList={[
        {
          tab: 'Chosen',
          key: '1',
        },
        {
          tab: 'Clickable',
          key: '2',
        },
        {
          tab: 'Disable',
          key: '3',
          disabled: true,
        },
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);
