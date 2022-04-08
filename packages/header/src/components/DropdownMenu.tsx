import type { ReactNode } from 'react';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'infrad';
import classNames from 'classnames';
import { IArrowDown, IArrowUp } from 'infra-design-icons';
import type { CustomizedNode, CustomizedNodeList } from '../typings';

export enum LAYOUT_TYPE {
  SELECT = 'select',
  DISPLAY = 'display',
}

interface IDropdownMenuProps {
  /** 两种场景：下拉选中 和 纯下拉展示 */
  layoutType: LAYOUT_TYPE;
  prefixCls?: string;
  menuList: CustomizedNodeList;
  /** 默认选中项 */
  selectedKey?: string;
  maxWidth?: number;
  /** 是否保留下拉中的选中状态 */
  keepSelectedStatus?: boolean;
  /** 前中项前置显示内容 */
  suffix: string;
  customMenuItem?: ReactNode;
  onMenuChange?: (arg: CustomizedNode | undefined) => void;
}
const DropdownMenu: React.FC<IDropdownMenuProps> = (props) => {
  const {
    layoutType = LAYOUT_TYPE.SELECT,
    prefixCls,
    menuList,
    selectedKey,
    maxWidth,
    keepSelectedStatus = false,
    suffix,
    customMenuItem,
    onMenuChange,
  } = props;

  const [selectedMenu, setSelectedMenu] = useState<string | number | undefined>();
  const [dropdownStatus, setDropdownStatus] = useState(false);

  useEffect(() => {
    setSelectedMenu(props.selectedKey);
  }, [props.selectedKey]);

  const handleMenuSelect = (key: string | number) => {
    setDropdownStatus(false);
    if (key !== 'btn') {
      setSelectedMenu(key);
      onMenuChange?.(menuList.find((i) => i.key === key));
    }
  };

  const menuDom = (
    <Menu
      onClick={(e) => {
        handleMenuSelect(e.key);
      }}
      style={{ paddingBottom: customMenuItem || layoutType === LAYOUT_TYPE.DISPLAY ? 0 : 8 }}
      className={classNames({
        [`${prefixCls}-menu-display`]: layoutType === LAYOUT_TYPE.DISPLAY,
      })}
    >
      <Menu.ItemGroup className={`${prefixCls}-menu-item-group`}>
        {menuList?.map((item) => (
          <Menu.Item
            key={item.key}
            style={{ maxWidth }}
            className={
              keepSelectedStatus && selectedMenu === item.key ? `${prefixCls}-menu-item-active` : ''
            }
          >
            {item.content}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
      {customMenuItem ? (
        <Menu.Item className={`${prefixCls}-custom-item`} key="btn">
          {customMenuItem}
        </Menu.Item>
      ) : null}
    </Menu>
  );

  const onVisibleChange = (visible: boolean) => {
    if (visible !== dropdownStatus) {
      setDropdownStatus(visible);
    }
  };

  return (
    <Dropdown overlay={menuDom} trigger={['click']} onVisibleChange={onVisibleChange}>
      <span
        className={classNames(`${prefixCls}-menu`, {
          [`${prefixCls}-menu-trigger`]: dropdownStatus,
        })}
      >
        <span style={{ maxWidth }}>
          {selectedKey
            ? (suffix ? `${suffix}:` : '') +
              `${menuList.find((i) => i.key === selectedMenu)?.content}`
            : suffix ?? ''}
        </span>
        {dropdownStatus ? (
          <IArrowUp style={{ marginLeft: 7, fontSize: 16 }} />
        ) : (
          <IArrowDown style={{ marginLeft: 7, fontSize: 16 }} />
        )}
      </span>
    </Dropdown>
  );
};
export default DropdownMenu;
