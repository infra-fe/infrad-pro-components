import './index.less';
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { Menu, Divider, Input, ConfigProvider } from 'infrad';
import DropdownMenu from './components/DropdownMenu';
import { GlobalHeaderProps } from './typings';

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
    searchable = true,
    searchPlaceholder = 'Search APP/Pod IP...',
    onSearch,
    userInfo,
    subTitle = 'Application Infra Homepage',
    hasNotice = false,
    extra,
  } = props;

  const [selectedNav, setSelectedNav] = useState(navMenu?.defaultSelectedKey);

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const headerPrefixCls = prefixCls || getPrefixCls('pro-global-header');
  const headerCls = classNames(className, headerPrefixCls);

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
            <Menu.Item key={item.key} icon={item.icon}>
              {item.content}
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
    <div className={headerCls} style={style}>
      <div className={`${headerPrefixCls}-left`}>
        {logoDom}
        {isLogin ? (
          <>
            {businessMenu ? (
              <DropdownMenu
                layoutType="select"
                prefixCls={headerPrefixCls}
                menuList={businessMenu.menuList}
                defaultSelectedKey={businessMenu.defaultSelectedKey}
                keepSelectedStatus={true}
                menuButtons={businessMenu?.menuButtons}
                suffix={businessMenu?.suffix || ''}
                onMenuChange={businessMenu.onMenuChange}
              />
            ) : null}
            {navMenu ? navMenuDom : null}
          </>
        ) : null}
      </div>
      <div className={`${headerPrefixCls}-right`}>
        {isLogin ? (
          <>
            {searchable ? (
              <Search
                placeholder={searchPlaceholder}
                allowClear
                style={{ width: 240 }}
                bordered={false}
                onSearch={onSearch}
              />
            ) : null}
            <div className={`${headerPrefixCls}-user`}>
              {userInfo?.avatar ? <img src={userInfo.avatar} alt="avatar" /> : null}
              {userInfo?.menuList ? (
                <DropdownMenu
                  layoutType="display"
                  prefixCls={headerPrefixCls}
                  menuList={userInfo.menuList}
                  suffix={userInfo.account}
                  onMenuChange={userInfo?.onMenuChange}
                />
              ) : null}
            </div>
          </>
        ) : (
          <>
            {subTitle ? <span className={`${headerPrefixCls}-guest`}>{subTitle}</span> : null}
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