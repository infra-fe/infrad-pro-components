import React from 'react';
import { PageHeader } from 'infrad-pro-layout';
import { message } from 'infrad';
import { IIntroduction, IProduct } from 'infra-design-icons';

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
    />
  </div>
);
