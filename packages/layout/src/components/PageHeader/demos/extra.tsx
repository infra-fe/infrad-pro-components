import React from 'react';
import { ProPageHeader } from 'infrad-pro-layout';
import { message, Button } from 'infrad';
import {
  IProduct,
  INoticeOutlined,
  IAdd,
  ISetting,
  ILanguage,
  LogoutOutlined,
} from 'infra-design-icons';

const createNewProject = () => message.info('create new project');
const manage = () => message.info('manage');

const businessMenu = {
  menuList: [
    { key: '1', content: 'Project Name 01Project Project Name 01Project Project Name 01Project' },
    { key: '2', content: 'Project Name 02' },
    { key: '3', content: 'Project Name 03' },
    { key: '4', content: 'Project Name 04' },
    { key: '5', content: 'Project Name 05' },
    { key: '6', content: 'Project Name 06' },
    { key: '7', content: 'Project Name 07' },
    { key: '8', content: 'Project Name 08' },
    { key: '9', content: 'Project Name 09' },
  ],
  defaultSelectedKey: '1',
  maxWidth: 400,
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
  onMenuChange: (arg: any | undefined) => message.info(arg?.content),
};

const userInfo = {
  avatar: 'https://coding.net/static/fruit_avatar/Fruit-19.png',
  account: 'Apple@shopee.com',
  menuList: [
    { key: 'account', content: <span>zhengxiao@shopee.com</span> },
    {
      key: 'logout',
      content: (
        <span>
          <LogoutOutlined style={{ marginRight: 8 }} />
          Logout
        </span>
      ),
    },
  ],
  onMenuChange: (arg: any | undefined) => message.info(arg?.key),
};

const Extra = (
  <>
    <ILanguage style={{ color: '#fff', fontSize: 18, marginLeft: 24 }} />
    <INoticeOutlined style={{ color: '#fff', fontSize: 18, marginLeft: 26 }} />
    <span
      style={{
        display: 'inline-block',
        padding: '6px 15px',
        marginLeft: 26,
        borderRadius: 50,
      }}
    >
      Help Center
    </span>
  </>
);

export default () => {
  return (
    <div style={{ width: '100%' }}>
      <ProPageHeader
        logo={<IProduct style={{ fontSize: 24 }} />}
        title="Shopee Content Config Management System"
        businessMenu={businessMenu}
        searchable={false}
        userInfo={userInfo}
        extra={Extra}
        onLogoClick={() => message.info('logo click')}
      />
    </div>
  );
};
