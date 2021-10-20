import './index.less';
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { Menu, Divider, Input, ConfigProvider } from 'infrad';
import DropdownMenu from './components/DropdownMenu';

export type GlobalHeaderProps = {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;

  isLogin?: Boolean;
  logo?: React.ReactElement;
  title: string;
  onLogoClick?: () => void;

  navMenu?: {
    menuList: { key: string; label: string; icon?: React.ReactElement }[];
    defaultNavKey: string;
    onNavChange: (key: string) => void;
  };

  businessMenu?: {
    suffix: string;
    defaultSelectedKey: string;
    menuList: { key: string; content: React.ReactNode }[];
    onMenuChange?: (key: string) => void;
  };

  searchPlaceholder?: string;
  onSearch?: (input: string) => void;

  userInfo?: {
    avatar: string;
    suffix: string;
    menuList?: { key: string; content: React.ReactNode }[];
  };

  subTitle?: string;
  hasNotice?: Boolean;
  extra?: React.ReactNode;
};

const { Search } = Input;

const PageHeader: React.FC<GlobalHeaderProps> = (props) => {
  const {
    className,
    prefixCls,
    style,
    isLogin = true,
    logo,
    title,
    onLogoClick,
    navMenu,
    businessMenu,
    searchPlaceholder = 'Search APP/Pod IP...',
    onSearch,
    userInfo,
    subTitle = 'Application Infra Homepage',
    hasNotice = false,
    extra,
  } = props;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const headerPrefixCls = prefixCls || getPrefixCls('pro-global-header');
  const headerCls = classNames(className, headerPrefixCls);

  const [selectedNav, setSelectedNav] = useState(navMenu?.defaultNavKey);

  const logoDom = (
    <span className={`${headerPrefixCls}-logo`} key="logo" onClick={onLogoClick}>
      {logo ? logo : null}
      {title}
    </span>
  );

  const navMenuDom = (
    <>
      <Divider type="vertical" />
      <div style={{ display: 'inline-block' }}>
        <Menu
          onClick={(e) => handleNavChange(e.key)}
          selectedKeys={[selectedNav ?? '']}
          mode="horizontal"
          theme="dark"
        >
          {navMenu?.menuList?.map((item) => (
            <Menu.Item key={item.key} icon={item.icon ?? null}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  );

  const handleNavChange = (key: string) => {
    setSelectedNav(key);
    navMenu?.onNavChange?.(key);
  };

  return (
    <div className={headerCls} style={{ ...style }}>
      <div className={`${headerPrefixCls}-left`}>
        {logoDom}
        {isLogin ? (
          <>
            {businessMenu ? (
              <DropdownMenu
                prefixCls={headerPrefixCls}
                menuList={businessMenu.menuList}
                defaultSelectedKey={businessMenu.defaultSelectedKey}
                keepSelectedStatus={true}
                suffix={businessMenu.suffix}
              />
            ) : null}
            {navMenu ? navMenuDom : null}
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
              onSearch={onSearch}
            />
            <div className={`${headerPrefixCls}-user`}>
              {userInfo?.avatar ? <img src={userInfo.avatar} alt="avatar" /> : null}
              {userInfo?.menuList ? (
                <DropdownMenu
                  prefixCls={headerPrefixCls}
                  menuList={userInfo.menuList}
                  suffix={userInfo.suffix}
                />
              ) : null}
            </div>
          </>
        ) : (
          <>
            <span className={`${headerPrefixCls}-unlogin`}>{subTitle}</span>
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
