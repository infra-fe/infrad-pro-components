import React from 'react';
import { PageContainer } from 'infrad-pro-layout';

export default () => (
  <div
    style={{
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
      height: '100vh',
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      ghost
      loading
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
    >
      <div
        style={{
          height: '100vh',
        }}
      >
        加载中这里不显示
      </div>
    </PageContainer>
  </div>
);
