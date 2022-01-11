import React from 'react';
import ProHeader from 'infrad-pro-header';
import type { NavMenu, UserInfo, BusinessMenu } from 'infrad-pro-header';
import { message } from 'infrad';
import { IIntroduction, IProduct } from 'infra-design-icons';

const BasicDemo = () => {
  const navMenu: NavMenu = {
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
    selectedKey: 'Application',
    onNavChange: (navKey) => message.info(navKey),
  };

  const businessMenu: BusinessMenu = {
    menuList: [
      { key: '1', content: 'Banking' },
      { key: '2', content: 'Data Science' },
      { key: '3', content: 'Financial Service' },
    ],
    suffix: 'Tenant',
    selectedKey: '1',
    onMenuChange: (arg) => message.info(arg?.content),
  };

  const userInfo: UserInfo = {
    avatar: 'https://coding.net/static/fruit_avatar/Fruit-19.png',
    account: 'Apple@shopee.com',
    menuList: [
      { key: 'account', content: <>Apple@shopee.com</> },
      { key: 'detail', content: <>Detail</> },
      { key: 'logout', content: <>Logout</> },
    ],
    onMenuChange: (arg) => message.info(arg?.key),
  };

  return (
    <div style={{ width: '100%' }}>
      <ProHeader
        logo={<IProduct style={{ fontSize: 24 }} />}
        title="Shopee Cloud"
        businessMenu={businessMenu}
        userInfo={userInfo}
        searchable={true}
        onSearch={(input) => message.info(`search: ${input}`)}
        navMenu={navMenu}
        onLogoClick={() => message.info('logo click')}
      />
    </div>
  );
};

export default BasicDemo;
