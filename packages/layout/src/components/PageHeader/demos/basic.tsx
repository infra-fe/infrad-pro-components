import React from 'react';
import { PageHeader } from 'infrad-pro-layout';
import { message } from 'infrad';
import { IIntroduction, IProduct } from 'infra-design-icons';
import { CustomizedNode } from '../typings';

const navMenu = {
  menuList: [
    {
      key: 'Application',
      content: 'Application',
      icon: <IIntroduction />,
    },
    {
      key: 'Resource',
      content: 'Resource',
      icon: <IProduct />,
    },
  ],
  defaultSelectedKey: 'Application',
  onNavChange: (navKey: string | number) => message.info(navKey),
};

const businessMenu = {
  menuList: [
    { key: '1', content: 'Banking' },
    { key: '2', content: 'Data Science' },
    { key: '3', content: 'Financial Service' },
  ],
  suffix: 'Tenant',
  defaultSelectedKey: '1',
  onMenuChange: (arg: CustomizedNode | undefined) => message.info(arg?.content),
};

const userInfo = {
  avatar: 'https://coding.net/static/fruit_avatar/Fruit-19.png',
  account: 'Apple@shopee.com',
  menuList: [
    { key: 'account', content: <>Apple@shopee.com</> },
    { key: 'detail', content: <>Detail</> },
    { key: 'logout', content: <>Logout</> },
  ],
  onMenuChange: (arg: CustomizedNode | undefined) => message.info(arg?.key),
};

export default () => (
  <div style={{ width: '100%' }}>
    <PageHeader
      logo={<IProduct style={{ fontSize: 24 }} />}
      title={'Shopee Cloud'}
      businessMenu={businessMenu}
      userInfo={userInfo}
      onSearch={(input) => message.info(`search: ${input}`)}
      navMenu={navMenu}
      onLogoClick={() => message.info('logo click')}
    />
  </div>
);
