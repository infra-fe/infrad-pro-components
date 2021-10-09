import React from 'react';
import { PageHeader } from 'infrad-pro-layout';
import { Menu } from 'infrad';
import { IArrowDown, IIntroduction, IProduct } from 'infra-design-icons';
const infoMenu = (
  <Menu>
    <Menu.Item key="info" onClick={() => alert('userInfo')}>
      ShudongLi@shopee.com
    </Menu.Item>
    <Menu.Item key="permission" onClick={() => alert('userPermission')}>
      Edit Permistion Groupe
    </Menu.Item>
    <Menu.Item key="logout" onClick={() => alert('logout')}>
      LogOut
    </Menu.Item>
  </Menu>
);

const navMenu = [
  {
    value: 'Application',
    label: 'Application',
    icon: IIntroduction,
  },
  {
    value: 'Resource',
    label: 'Resource',
    icon: IProduct,
  },
];
export default () => (
  <div style={{ width: '100%' }}>
    <PageHeader
      logo={<IProduct />}
      title={'Shopee Cloud'}
      selectMenu={[
        { value: 1, label: 'Banking' },
        { value: 2, label: 'Data Science' },
        { value: 3, label: 'Financial Service' },
      ]}
      onMenuSelect={(key) => console.log(key)}
      avatarUrl={'https://coding.net/static/fruit_avatar/Fruit-19.png'}
      account={'shudong.li@shopee.com'}
      infoMenu={infoMenu}
      onInputSearch={(input) => alert(input)}
      navMenu={navMenu}
      onNavChange={(nav) => alert(nav)}
    />
  </div>
);