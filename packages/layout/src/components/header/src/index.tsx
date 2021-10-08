import './index.less';
import React, { useState } from 'react';
import classNames from 'classnames';

import { IInstagram, IArrowDown, IIntroduction } from 'infra-design-icons';
import { Menu, Dropdown, Divider, Input, Select } from 'infrad';

export type GlobalHeaderProps = {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
  logo?: React.ReactNode;
  title: React.ReactNode;
};

const { Search } = Input;
const { Option } = Select;
const imgSrc =
  'https://lh3.googleusercontent.com/a/AATXAJwuBvQcPnrqY2FAswoNsh5SFCQ0f8X3U83mE4RR=s96-c';

const ProHeader: React.FC<GlobalHeaderProps> = (props) => {
  const { className, prefixCls, style, logo, title } = props;

  const headerPrefixCls = `${prefixCls}-global-header`;
  const headerCls = classNames(className, headerPrefixCls);

  const [current, setCurrent] = useState('Application');
  const [selected, setSelected] = useState('Tenant');

  const logoDom = (
    <span className={`${headerPrefixCls}-logo`} key="logo">
      <IInstagram className={`${prefixCls}-logo-icon`} style={{ fontSize: 26, marginRight: 8 }} />
      {'Shopee Undefined Platform'}
    </span>
  );

  const menu = (
    <Menu onClick={(e) => setSelected(`Tenant: ${e.key}`)}>
      <Menu.Item key="Banking">Banking</Menu.Item>
      <Menu.Item key="Data Science">Data Science</Menu.Item>
      <Menu.Item key="Financial Service">Financial Service</Menu.Item>
      <Menu.Item key="Digital Purchase">Digital Purchase</Menu.Item>
      <Menu.Item key="SeaMoney Credit">SeaMoney Credit</Menu.Item>
      <Menu.Item key="Shopee Food">Shopee Food</Menu.Item>
    </Menu>
  );
  const info = (
    <Menu>
      <Menu.Item key="Banking">ShudongLi@shopee.com</Menu.Item>
      <Menu.Item key="Data Science">Edit Permistion Groupe</Menu.Item>
      <Menu.Item key="Financial Service">LogOut</Menu.Item>
    </Menu>
  );
  const navMenu = (
    <div style={{ display: 'inline-block' }}>
      <Menu
        onClick={(e) => setCurrent(e.key)}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="Application" icon={<IIntroduction />}>
          Application
        </Menu.Item>
        <Menu.Item key="Resource" icon={<IIntroduction />}>
          Resource
        </Menu.Item>
      </Menu>
    </div>
  );

  return (
    <div className={headerCls} style={{ ...style }}>
      <div className={`${headerPrefixCls}-left`}>
        {logoDom}
        <Dropdown overlay={menu} trigger={['click']}>
          <span className={`${headerPrefixCls}-menu`}>
            {selected}
            <IArrowDown style={{ marginLeft: 7 }} />
          </span>
        </Dropdown>
        <Divider type="vertical" />
        {navMenu}
      </div>
      <div className={`${headerPrefixCls}-right`}>
        <Search
          placeholder="Search APP/Pod IP..."
          allowClear
          style={{ width: 240 }}
          bordered={false}
        />
        <div className={`${headerPrefixCls}-user`}>
          <img src={imgSrc} alt="avatar" />
          <Dropdown overlay={info} trigger={['hover']}>
            <span className={`${headerPrefixCls}-menu`}>
              {'shduong.li@shopee.com'}
              <IArrowDown style={{ marginLeft: 7 }} />
            </span>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProHeader;
