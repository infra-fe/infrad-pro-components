import React, { ReactNode, useState, useEffect } from 'react';
import { Menu, Dropdown } from 'infrad';
import classNames from 'classnames';
import { IArrowDown, IArrowUp } from 'infra-design-icons';
import { CustomizedNode, CustomizedNodeList } from '../typings';

interface IDropdownMenuProps {
  /** 两种场景：下拉选中 和 纯下拉展示 */
  layoutType: 'select' | 'display';
  prefixCls?: string;
  menuList: CustomizedNodeList;
  /** 默认选中项 */
  defaultSelectedKey?: string;
  /** 是否保留下拉中的选中状态 */
  keepSelectedStatus?: boolean;
  /** 前中项前置显示内容 */
  suffix: string;
  menuButtons?: ReactNode;
  onMenuChange?: (arg: CustomizedNode | undefined) => void;
}
const DropdownMenu: React.FC<IDropdownMenuProps> = (props) => {
  const {
    layoutType = 'select',
    prefixCls,
    menuList,
    defaultSelectedKey,
    keepSelectedStatus = false,
    suffix,
    menuButtons,
    onMenuChange,
  } = props;

  const [selectedMenu, setSelectedMenu] = useState<string | number | undefined>();
  const [dropdownStatus, setDropdownStatus] = useState(false);

  useEffect(() => {
    setSelectedMenu(props.defaultSelectedKey);
  }, [props.defaultSelectedKey]);

  const menuDom = (
    <Menu
      onClick={(e) => {
        handleMenuSelect(e.key);
      }}
      style={{ paddingBottom: menuButtons || layoutType === 'display' ? 0 : 8 }}
      className={classNames({
        [`${prefixCls}-menu-display`]: layoutType === 'display',
      })}
    >
      <Menu.ItemGroup className={`${prefixCls}-menu-item-group`}>
        {menuList?.map((item) => (
          <Menu.Item
            key={item.key}
            className={
              keepSelectedStatus && selectedMenu === item.key ? `${prefixCls}-menu-item-active` : ''
            }
          >
            {item.content}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
      {menuButtons ? (
        <Menu.Item className={`${prefixCls}-menu-btn`} key="btn">
          {menuButtons}
        </Menu.Item>
      ) : null}
    </Menu>
  );

  const handleMenuSelect = (key: string | number) => {
    setDropdownStatus(false);
    if (key !== 'btn') {
      setSelectedMenu(key);
      onMenuChange?.(menuList.find((i) => i.key === key));
    }
  };

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
        <span>
          {defaultSelectedKey
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
