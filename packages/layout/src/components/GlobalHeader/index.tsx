import './index.less';
import React, { useState } from 'react';
import classNames from 'classnames';

import type { PureSettings } from '../../defaultSettings';
import { IInstagram, IArrowDown, IIntroduction } from 'infra-design-icons';
import { Menu, Dropdown, Divider, Input } from 'infrad';

export type GlobalHeaderProps = {
  logo?: React.ReactNode;
  title: React.ReactNode;
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
} & Partial<PureSettings>;

const { Search } = Input;
const imgSrc =
  'https://lh3.googleusercontent.com/a/AATXAJwuBvQcPnrqY2FAswoNsh5SFCQ0f8X3U83mE4RR=s96-c';

const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  const { logo, className, style, children, title, prefixCls, layout } = props;

  const headerPrefixCls = `${prefixCls}-global-header`;
  const headerCls = classNames(className, headerPrefixCls);

  const [current, setCurrent] = useState('Application');

  const logoDom = (
    <span className={`${headerPrefixCls}-logo`} key="logo">
      <IInstagram className={`${prefixCls}-logo-icon`} style={{ fontSize: 26, marginRight: 8 }} />
      {title}
    </span>
  );

  const menu = (
    <Menu>
      <Menu.Item>Banking</Menu.Item>
      <Menu.Item>Data Science</Menu.Item>
      <Menu.Item>Financial Service</Menu.Item>
      <Menu.Item>Digital Purchase</Menu.Item>
      <Menu.Item>SeaMoney Credit</Menu.Item>
      <Menu.Item>Shopee Food</Menu.Item>
    </Menu>
  );
  const menuDom = (
    <Dropdown overlay={menu}>
      <span className={`${headerPrefixCls}-menu`}>
        Tenant Switcher
        <IArrowDown style={{ marginLeft: 7 }} />
      </span>
    </Dropdown>
  );
  const userDom = (
    <div className={`${headerPrefixCls}-user`} style={{ width: 200 }}>
      <img src={imgSrc} alt="avatar" />
      {menuDom}
    </div>
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
        {menuDom}
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
        {userDom}
      </div>
    </div>
  );
};

export default GlobalHeader;
