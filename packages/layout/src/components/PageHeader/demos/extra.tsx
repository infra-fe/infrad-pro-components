import React from 'react';
import { PageHeader } from 'infrad-pro-layout';
import { Menu, message } from 'infrad';
import { IIntroduction, IProduct, INoticeOutlined } from 'infra-design-icons';

const navMenu = {
  menuList: [
    {
      key: 'Application',
      label: 'Application',
      icon: <IIntroduction />,
    },
    {
      key: 'Resource',
      label: 'Resource',
      icon: <IProduct />,
    },
  ],
  defaultNavKey: 'Application',
  onNavChange: (navKey: string) => message.info(navKey),
};

const businessMenu = {
  menuList: [
    { key: '1', content: 'Banking' },
    { key: '2', content: 'Data Science' },
    { key: '3', content: 'Financial Service' },
  ],
  suffix: 'Tenant',
  defaultSelectedKey: '1',
  onMenuChange: (key: string) => message.info(key),
};

const userInfo = {
  avatar: 'https://coding.net/static/fruit_avatar/Fruit-19.png',
  suffix: 'Apple@shopee.com',
  menuList: [
    { key: '1', content: <>Apple@shopee.com</> },
    { key: '2', content: <>Detail</> },
    { key: '3', content: <>Logout</> },
  ],
};

const Extra = (
  <>
    <INoticeOutlined style={{ color: '#fff', fontSize: 18, marginLeft: 10 }} />
    <span
      style={{
        display: 'inline-block',
        padding: '0 10px',
        height: 26,
        lineHeight: '24px',
        marginLeft: 18,
        borderRadius: 50,
      }}
    >
      Education Hub
    </span>
  </>
);

export default () => (
  <div style={{ width: '100%' }}>
    <PageHeader
      logo={<IProduct style={{ fontSize: 24 }} />}
      title={'Shopee Cloud'}
      onLogoClick={() => message.info('logo click')}
      businessMenu={businessMenu}
      userInfo={userInfo}
      onSearch={(input) => message.info(`search: ${input}`)}
      navMenu={navMenu}
      extra={Extra}
    />
  </div>
);
