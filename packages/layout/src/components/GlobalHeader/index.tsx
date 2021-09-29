import './index.less';
import React from 'react';
import classNames from 'classnames';

import type { PureSettings } from '../../defaultSettings';
import { IInstagram, IArrowDown } from 'infra-design-icons';
import { Menu, Dropdown, Divider, Input } from 'infrad';

export type GlobalHeaderProps = {
  logo?: React.ReactNode;
  title: React.ReactNode;
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
} & Partial<PureSettings>;

const { Search } = Input;

const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  const { logo, className, style, children, title, prefixCls, layout } = props;

  const headerPrefixCls = `${prefixCls}-global-header`;
  const headerCls = classNames(className, headerPrefixCls);

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
  return (
    <div className={headerCls} style={{ ...style }}>
      <div className={`${headerPrefixCls}-left`}>
        {logoDom}
        {menuDom}
        <Divider type="vertical" />
      </div>
      <div className={`${headerPrefixCls}-right`}>
        <Search
          placeholder="Search APP/Pod IP..."
          allowClear
          style={{ width: 240 }}
          bordered={false}
        />
      </div>
    </div>
  );
};

export default GlobalHeader;
