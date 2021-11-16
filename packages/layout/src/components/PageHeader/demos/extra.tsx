import React from 'react';
import { ProPageHeader } from 'infrad-pro-layout';
import { message, Button } from 'infrad';
import { IIntroduction, IProduct, INoticeOutlined, IAdd, ISetting } from 'infra-design-icons';
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

const createNewProject = () => message.info('create new project');
const manage = () => message.info('manage');

const businessMenu = {
  menuList: [
    { key: '1', content: 'Banking' },
    { key: '2', content: 'Data Science' },
    { key: '3', content: 'Financial Service' },
  ],
  defaultSelectedKey: '1',
  menuButtons: (
    <>
      <Button type="link" onClick={createNewProject}>
        <IAdd />
        Create New
      </Button>
      <Button type="link" onClick={manage}>
        <ISetting />
        Manage
      </Button>
    </>
  ),
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

const Extra = (
  <>
    <INoticeOutlined style={{ color: '#fff', fontSize: 18, marginLeft: 10 }} />
    <span
      style={{
        display: 'inline-block',
        padding: '6px 15px',
        marginLeft: 18,
        borderRadius: 50,
      }}
    >
      Help Center
    </span>
  </>
);

export default () => (
  <div style={{ width: '100%', minWidth: 1800 }}>
    <ProPageHeader
      logo={<IProduct style={{ fontSize: 24 }} />}
      title="Shopee Content Config Management System"
      businessMenu={businessMenu}
      userInfo={userInfo}
      onSearch={(input) => message.info(`search: ${input}`)}
      // navMenu={navMenu}
      extra={Extra}
      onLogoClick={() => message.info('logo click')}
    />
  </div>
);
