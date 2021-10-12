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
  isLogin?: Boolean;
  hasNotice?: Boolean;
  selectMenu: { value: number | string; label: string }[];
  onMenuSelect?: (key: number | string) => void;
  avatarUrl?: string;
  account: string;
  infoMenu: React.ReactElement;
  searchPlaceholder?: string;
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
    isLogin = true,
    hasNotice = true,
    selectMenu,
    onMenuSelect,
    avatarUrl,
    account,
    infoMenu,
    searchPlaceholder = 'Search APP/Pod IP...',
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
  const [selected, setSelected] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const logoDom = (
    <span className={`${headerPrefixCls}-logo`} key="logo">
      {logo ? logo : null}
      {title}
    </span>
  );

  const handleMenuSelect = (key: string) => {
    setSelected(key);
    setDropdown(false);
    if (onMenuSelect) {
      onMenuSelect(key);
    }
  };
  const handleTenantSwitcher = (visible: boolean) => {
    if (visible !== dropdown) {
      setDropdown(visible);
    }
    console.log(visible);
  };
  const menu = (
    <Menu onClick={(e) => handleMenuSelect(e.key)}>
      {selectMenu?.map((item) => (
        <Menu.Item key={item.label} style={{ color: selected === item.label ? '#2673DD' : '' }}>
          {item.label}
        </Menu.Item>
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
        {isLogin ? (
          <>
            {selectMenu ? (
              <Dropdown overlay={menu} trigger={['click']} onVisibleChange={handleTenantSwitcher}>
                <span
                  className={`${headerPrefixCls}-menu`}
                  style={{ color: dropdown ? '#fff' : '' }}
                >
                  {`Tenant: ${selected}`}
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
          </>
        ) : null}
      </div>
      <div className={`${headerPrefixCls}-right`}>
        {isLogin ? (
          <>
            <Search
              placeholder={searchPlaceholder}
              allowClear
              style={{ width: 240 }}
              bordered={false}
              onSearch={onInputSearch}
            />
            <div className={`${headerPrefixCls}-user`}>
              {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : null}
              {infoMenu ? (
                <Dropdown
                  overlay={infoMenu}
                  trigger={['hover']}
                  overlayClassName={`${headerPrefixCls}-user-dropdown`}
                >
                  <span className={`${headerPrefixCls}-menu`}>
                    {account}
                    <IArrowDown style={{ marginLeft: 7 }} />
                  </span>
                </Dropdown>
              ) : (
                <span className={`${headerPrefixCls}-menu`}>{account}</span>
              )}
            </div>
          </>
        ) : (
          <>
            <span className={`${headerPrefixCls}-unlogin`}>Application Infra Homepage</span>
            {hasNotice ? <span className={`${headerPrefixCls}-notice`}>New</span> : null}
          </>
        )}
        {extra ? (
          <div className={`${headerPrefixCls}-extra`}>
            <Divider type="vertical" />
            {extra}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
