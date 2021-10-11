---
title: PageHeader - 高级头部导航栏
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ProHeader - 高级头部导航栏

## 何时使用

### 基本使用

<code src="./demos/basic.tsx" iframe="500px" title="基本使用" desc="基本使用" />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 标题 | `React.ReactNode` | - |
| logo | logo | `React.ReactElement` | - |
| selectMenu | Tenant 下拉列表 | `{ value: number \| string; label: string }[]` | - |
| onMenuSelect | Tenant 下拉选中某一项时调用此函数 | `(key: number \| string) => void` | - |
| avatarUrl | 用户头像图片 url | `string`  | - |
| account | 用户账号 | `string` | - |
| infoMenu | 用户账号下拉列表 | `React.ReactElement` | 24 |
| onInputSearch | 搜索框点击搜索或者清空时调用此函数 | `(input: string) => void` | 0 |
| navMenu | 顶部导航列表 | `{ value: string; label: string; icon: typeof IArrowDown }[]` | - |
| onNavChange | 点击 navMenu 时调用此函数 | `(key: string) => void` | - |
