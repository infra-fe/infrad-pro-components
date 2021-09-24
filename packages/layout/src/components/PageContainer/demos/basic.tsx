import React from 'react';
import { EllipsisOutlined } from 'infra-design-icons';
import { Button, Dropdown, Menu } from 'infrad';
import { PageContainer } from 'infrad-pro-layout';
import ProCard from 'infrad-pro-card';

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: 'Page Title',
        ghost: true,
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
        extra: [
          <Button key="1">Secondary Button</Button>,
          <Button key="2">Secondary Button</Button>,
          <Button key="3" type="primary">
            Primary Button
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item key="1">Dropdown Item 1</Menu.Item>
                <Menu.Item key="2">Dropdown Item 2</Menu.Item>
                <Menu.Item key="3">Dropdown Item 3</Menu.Item>
              </Menu>
            }
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      tabList={[
        {
          tab: 'Basic Info',
          key: 'base',
          closable: false,
        },
        {
          tab: 'Detail Info',
          key: 'info',
        },
      ]}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
      footer={[
        <Button key="3">Reset</Button>,
        <Button key="2" type="primary">
          Submit
        </Button>,
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
