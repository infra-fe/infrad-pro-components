---
title: ProHeader - 高级头部导航栏
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ProHeader - 高级头部导航栏

## 何时使用

### 基本使用

<code hideActions='["CSB"]' src="./demos/basic.tsx" iframe="500px" title="基本使用" desc="基本使用" />

### 未登录状态

<code hideActions='["CSB"]' src="./demos/unlogin.tsx" iframe="500px" title="基本使用" desc="基本使用" />

### 自定义右上角

<code hideActions='["CSB"]' src="./demos/extra.tsx" iframe="500px" title="自定义右上角" desc="自定义右上角" />

## API

### basic

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| isLogin | 是否已登陆，通过登录态来切换显示项 | `Boolean` | true |
| logo | logo | `React.ReactElement` | - |
| title | 左侧主标题 | `string` | - |
| onLogoClick | 点击 logo 和 title 的回调函数 | `() => void` | - |
| navMenu | 一级导航菜单 | [NavMenu](#navmenu) | - |
| businessMenu | 业务线菜单 | [BusinessMenu](#businessmenu) | - |
| searchable | 是否有搜索框功能 | `boolean` | true |
| searchPlaceholder | 搜索框占位符 | `string` | `Search APP/Pod IP...` |
| onSearch | 搜索框点击搜索或者清空时调用此函数 | `(input: string) => void` | - |
| userInfo | 用户信息菜单 | [UserInfo](#userinfo) | - |
| subTitle | 未登录状态下右侧子标题 | `string` | `Application Infra Homepage` |
| hasNotice | 是否有更新 | `Boolean` | true |
| extra | 右上角自定义区域 | `React.ReactNode` | - |

### NavMenu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| menuList | 导航菜单列表 | `{ key: string \| number; content: React.ReactNode; icon?: React.ReactElement }[]` | true |
| selectedKey | 选中项 | `string` | - |
| onNavChange | 导航菜单切换回调函数 | `(key: string \| number) => void;` | - |

### BusinessMenu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| suffix | 业务线菜单前缀 | `string` | true |
| selectedKey | 选中项 | `string` | - |
| maxWidth | 显示最大宽度 | `number` | - |
| customMenuItem | 用户自定义列表底部 | `ReactNode` | - |
| menuList | 下拉列表 | `{ key: string \| number; content: React.ReactNode;}[]` | - |
| onMenuChange | 下拉列表选中回调函数 | `onMenuChange?: (arg: {key: string \| number;content: React.ReactNode;} \| undefined) => void;` | - |

### UserInfo

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 用户头像 | `string` | true |
| account | 用户账号 | `string` | - |
| menuList | 下拉列表 | `{ key: string \| number; content: React.ReactNode;}[]` | - |
| onMenuChange | 下拉列表选中回调函数 | `(arg: {key: string \| number; content: React.ReactNode;} \| undefined) => void` | - |
