import './index.less';
import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import { IArrowDown } from 'infra-design-icons';
import { Menu, Dropdown, Divider, Input, ConfigProvider } from 'infrad';

export type GlobalHeaderProps = {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
  logo?: React.ReactElement;
  title: React.ReactNode;
  selectMenu: { value: number | string; label: string }[];
  onMenuSelect?: (key: number | string) => void;
  avatarUrl?: string;
  account: string;
  infoMenu: React.ReactElement;
  onInputSearch?: (input: string) => void;
  navMenu: { value: string; label: string; icon?: React.ReactElement }[];
  onNavChange: (key: string) => void;
  extra?: React.ReactNode;
};

const { Search } = Input;

const PageHeader: React.FC<GlobalHeaderProps> = (props) => {
  const {
    className,
    prefixCls,
    style,
    logo,
    title,
    selectMenu,
    onMenuSelect,
    avatarUrl,
    account,
    infoMenu,
    onInputSearch,
    navMenu,
    onNavChange,
    extra,
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const headerPrefixCls = prefixCls || getPrefixCls('pro-global-header');
  const headerCls = classNames(className, headerPrefixCls);

  const initialState = navMenu?.[0]?.value ?? '';
  const [current, setCurrent] = useState(initialState);
  const [selected, setSelected] = useState('Tenant');

  const logoDom = (
    <span className={`${headerPrefixCls}-logo`} key="logo">
      {logo ? logo : null}
      {title}
    </span>
  );

  const handleMenuSelect = (key: number | string) => {
    setSelected(`Tenant: ${key}`);
    if (onMenuSelect) {
      onMenuSelect(key);
    }
  };
  const menu = (
    <Menu onClick={(e) => handleMenuSelect(e.key)}>
      {selectMenu?.map((item) => (
        <Menu.Item key={item.label}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const handleNavChange = (key: string) => {
    setCurrent(key);
    if (onNavChange) {
      onNavChange(key);
    }
  };

  return (
    <div className={headerCls} style={{ ...style }}>
      <div className={`${headerPrefixCls}-left`}>
        {logoDom}
        {selectMenu ? (
          <Dropdown overlay={menu} trigger={['click']}>
            <span className={`${headerPrefixCls}-menu`}>
              {selected}
              <IArrowDown style={{ marginLeft: 7 }} />
            </span>
          </Dropdown>
        ) : null}
        {navMenu ? (
          <>
            <Divider type="vertical" />
            <div style={{ display: 'inline-block' }}>
              <Menu
                onClick={(e) => handleNavChange(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
                theme="dark"
              >
                {navMenu?.map((item) => (
                  <Menu.Item key={item.value} icon={item.icon ?? null}>
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </>
        ) : null}
      </div>
      <div className={`${headerPrefixCls}-right`}>
        <Search
          placeholder="Search APP/Pod IP..."
          allowClear
          style={{ width: 240 }}
          bordered={false}
          onSearch={onInputSearch}
        />
        <div className={`${headerPrefixCls}-user`}>
          {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : null}
          {infoMenu ? (
            <Dropdown overlay={infoMenu} trigger={['hover']}>
              <span className={`${headerPrefixCls}-menu`}>
                {account}
                <IArrowDown style={{ marginLeft: 7 }} />
              </span>
            </Dropdown>
          ) : (
            <span className={`${headerPrefixCls}-menu`}>{account}</span>
          )}
        </div>
        {extra ? <div className={`${headerPrefixCls}-user`}>{extra}</div> : null}
      </div>
    </div>
  );
};

export default PageHeader;
