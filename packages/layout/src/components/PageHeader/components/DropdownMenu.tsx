import React, { useState } from 'react';
import { Menu, Dropdown } from 'infrad';
import classNames from 'classnames';
import { IArrowDown } from 'infra-design-icons';
import { CustomizedNodeList } from '../typings';

interface IDropdownMenuProps {
  prefixCls?: string;
  menuList: CustomizedNodeList;
  /** 默认选中项 */
  defaultSelectedKey?: string;
  /** 是否保留下拉中的选中状态 */
  keepSelectedStatus?: boolean;
  /** 前中项前置显示内容 */
  suffix: string;
}
const DropdownMenu: React.FC<IDropdownMenuProps> = (props) => {
  const { prefixCls, menuList, defaultSelectedKey, keepSelectedStatus = false, suffix } = props;

  const [selectedMenu, setSelectedMenu] = useState(defaultSelectedKey);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const menuDom = (
    <Menu onClick={(e) => handleMenuSelect(e.key)}>
      {menuList?.map((item) => (
        <Menu.Item
          key={item.key}
          style={{ color: keepSelectedStatus && selectedMenu === item.key ? '#2673DD' : '' }}
        >
          {item.content}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleMenuSelect = (key: string) => {
    setSelectedMenu(key);
    setDropdownStatus(false);
  };

  const onVisibleChange = (visible: boolean) => {
    if (visible !== dropdownStatus) {
      setDropdownStatus(visible);
    }
  };

  return (
    <Dropdown overlay={menuDom} trigger={['hover']} onVisibleChange={onVisibleChange}>
      <span
        className={classNames(`${prefixCls}-menu`, {
          [`${prefixCls}-menu-trigger`]: dropdownStatus,
        })}
      >
        {defaultSelectedKey
          ? `${suffix}: ${menuList.find((i) => i.key === selectedMenu)?.content}`
          : suffix}
        <IArrowDown style={{ marginLeft: 7 }} />
      </span>
    </Dropdown>
  );
};
export default DropdownMenu;
