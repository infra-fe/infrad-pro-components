import React from 'react';

export type GlobalHeaderProps = {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
  /** 是否登录 */
  isLogin?: Boolean;
  /** Logo */
  logo?: React.ReactElement;
  /** 页面titlte */
  title: string;
  /** 点击logo的回调函数 */
  onLogoClick?: () => void;

  /** 一级导航 */
  navMenu?: {
    menuList: { key: string | number; content: React.ReactNode; icon?: React.ReactElement }[];
    /** 默认选中项 */
    defaultSelectedKey: string;
    /** 导航切换回调函数 */
    onNavChange: (key: string | number) => void;
  };

  /** 业务线菜单 */
  businessMenu?: {
    /** 所选项前缀 */
    suffix: string;
    /** 默认选中项 */
    defaultSelectedKey: string;
    menuList: CustomizedNodeList;
    /** 所选项切换回调函数 */
    onMenuChange?: (key: string | number) => void;
  };

  /** Input占位符 */
  searchPlaceholder?: string;
  /** Search事件回调函数 */
  onSearch?: (input: string) => void;

  /** 用户信息相关 */
  userInfo?: {
    /** 用户头像 */
    avatar: string;
    /** 用户账号 */
    account: string;
    menuList?: CustomizedNodeList;
  };

  /** 未登录状态子标题 */
  subTitle?: string;
  /** 是否有更新 */
  hasNotice?: Boolean;
  /** 右上角自定义扩展 */
  extra?: React.ReactNode;
};

export type CustomizedNodeList = {
  key: string | number;
  content: React.ReactNode;
  icon?: React.ReactElement;
}[];
