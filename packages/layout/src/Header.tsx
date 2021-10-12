import './Header.less';

import React, { Component } from 'react';
import classNames from 'classnames';
import { Layout } from 'infrad';
import type { GlobalHeaderProps } from './components/GlobalHeader';
import PageHeader from './components/PageHeader';
import TopNavHeader from './components/TopNavHeader';
import type { WithFalse } from './typings';
import type { PrivateSiderMenuProps } from './components/SiderMenu/SiderMenu';
import { clearMenuItem } from './utils/utils';
import { Menu } from 'infrad';
import { IIntroduction, IProduct, INoticeOutlined } from 'infra-design-icons';

const { Header } = Layout;

export type HeaderViewProps = GlobalHeaderProps & {
  isMobile?: boolean;
  collapsed?: boolean;
  logo?: React.ReactNode;
  headerRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >;
  headerTitleRender?: WithFalse<
    (logo: React.ReactNode, title: React.ReactNode, props: HeaderViewProps) => React.ReactNode
  >;
  headerContentRender?: WithFalse<(props: HeaderViewProps) => React.ReactNode>;
  siderWidth?: number;
  hasSiderMenu?: boolean;
};

type HeaderViewState = {
  visible: boolean;
};

class HeaderView extends Component<HeaderViewProps & PrivateSiderMenuProps, HeaderViewState> {
  renderContent = () => {
    const { isMobile, onCollapse, navTheme, layout, headerRender, headerContentRender } =
      this.props;
    const isTop = layout === 'top';
    const clearMenuData = clearMenuItem(this.props.menuData || []);

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
        icon: <IIntroduction />,
      },
      {
        value: 'Resource',
        label: 'Resource',
        icon: <IProduct />,
      },
    ];

    const extra = (
      <>
        <INoticeOutlined style={{ color: '#fff', fontSize: '18px', marginLeft: 10 }} />
        <span
          style={{
            display: 'inline-block',
            padding: '0 10px',
            height: 26,
            lineHeight: '24px',
            marginLeft: '18px',
            borderRadius: 50,
          }}
        >
          Education Hub
        </span>
      </>
    );

    let defaultDom = (
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
        extra={extra}
      />
    );

    if (isTop && !isMobile) {
      defaultDom = (
        <TopNavHeader
          theme={navTheme as 'light' | 'dark'}
          mode="horizontal"
          onCollapse={onCollapse}
          {...this.props}
          menuData={clearMenuData}
        />
      );
    }
    if (headerRender && typeof headerRender === 'function') {
      return headerRender(this.props, defaultDom);
    }
    return defaultDom;
  };

  render(): React.ReactNode {
    const {
      fixedHeader,
      layout,
      className: propsClassName,
      style,
      navTheme,
      collapsed,
      siderWidth,
      hasSiderMenu,
      isMobile,
      prefixCls,
      headerHeight,
    } = this.props;
    const needFixedHeader = fixedHeader || layout === 'mix';
    const isTop = layout === 'top';

    const needSettingWidth = needFixedHeader && hasSiderMenu && !isTop && !isMobile;

    const className = classNames(propsClassName, {
      [`${prefixCls}-fixed-header`]: needFixedHeader,
      [`${prefixCls}-fixed-header-action`]: !collapsed,
      [`${prefixCls}-top-menu`]: isTop,
      [`${prefixCls}-header-${navTheme}`]: navTheme && layout !== 'mix',
    });

    /** 计算侧边栏的宽度，不然导致左边的样式会出问题 */
    const width =
      layout !== 'mix' && needSettingWidth
        ? `calc(100% - ${collapsed ? 48 : siderWidth}px)`
        : '100%';

    const right = needFixedHeader ? 0 : undefined;

    return (
      <>
        {needFixedHeader && (
          <Header
            style={{
              height: headerHeight,
              lineHeight: `${headerHeight}px`,
              background: 'transparent',
            }}
          />
        )}
        <Header
          style={{
            padding: 0,
            height: headerHeight,
            lineHeight: `${headerHeight}px`,
            width,
            zIndex: layout === 'mix' ? 100 : 19,
            right,
            ...style,
          }}
          className={className}
        >
          {this.renderContent()}
        </Header>
      </>
    );
  }
}

export default HeaderView;
