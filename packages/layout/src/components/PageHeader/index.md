---
title: ProPageHeader - 高级头部导航栏
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ProPageHeader - 高级头部导航栏

## 何时使用

### 基本使用

<code src="./demos/basic.tsx" iframe="500px" title="基本使用" desc="基本使用" />

### 未登录

<code src="./demos/unlogin.tsx" iframe="500px" title="基本使用" desc="基本使用" />

### 自定义右上角

<code src="./demos/extra.tsx" iframe="500px" title="自定义右上角" desc="自定义右上角" />

## API

### basic

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| isLogin | 是否已登陆，通过登录态来切换显示项 | `Boolean` | true |
| logo | logo | `React.ReactElement` | - |
| title | 左侧主标题 | `string` | - |
| onLogoClick | 点击 logo 和 title 的回调函数 | `() => void` | - |
| navMenu | 一级导航菜单 | [navMenu](#nav-menu) | - |
| businessMenu | 业务线菜单 | [businessMenu](#business-menu) | - |
| userInfo | 用户信息菜单 | [userInfo](#user-menu) | - |
| searchPlaceholder | 搜索框占位符 | `string` | `Search APP/Pod IP...` |
| onSearch | 搜索框点击搜索或者清空时调用此函数 | `(input: string) => void` | - |
| subTitle | 未登录状态下右侧子标题 | `string` | `Application Infra Homepage` |
| hasNotice | 是否有更新 | `Boolean` | true |
| extra | 右上角自定义区域 | `React.ReactNode` | - |

### nav-menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| menuList | 导航菜单列表 | `{ key: string \| number; content: React.ReactNode; icon?: React.ReactElement }[]` | true |
| defaultSelectedKey | 默认选中项 | `string` | - |
| onNavChange | 导航菜单切换回调函数 | `(key: string \| number) => void;` | - |

### business-menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| suffix | 业务线菜单前缀 | `string` | true |
| defaultSelectedKey | 默订选中项 | `string` | - |
| menuList | 下拉列表 | `{ key: string \| number; content: React.ReactNode;}[]` | - |
| onMenuChange | 下拉列表选中回调函数 | `onMenuChange?: (arg: {key: string \| number;content: React.ReactNode;} \| undefined) => void;` | - |

### user-menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 用户头像 | `string` | true |
| account | 用户账号 | `string` | - |
| menuList | 下拉列表 | `{ key: string \| number; content: React.ReactNode;}[]` | - |
| onMenuChange | 下拉列表选中回调函数 | `(arg: {key: string \| number; content: React.ReactNode;} \| undefined) => void` | - |
