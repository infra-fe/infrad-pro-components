import React from 'react';
import { Descriptions } from 'infrad';
import { PageContainer } from 'infrad-pro-layout';
import ProCard from 'infrad-pro-card';

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      ghost
      header={{
        title: 'Page Title',
        breadcrumb: {},
      }}
      content={
        <Descriptions column={2} style={{ marginBottom: -16 }}>
          <Descriptions.Item label="Creator">LieLie Qu</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Ticket Comment">
            Road West Lake, Hangzhou, Zhejiang
          </Descriptions.Item>
        </Descriptions>
      }
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
