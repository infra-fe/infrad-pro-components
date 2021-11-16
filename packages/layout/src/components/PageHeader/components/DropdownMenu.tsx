import React, { ReactNode, useState } from 'react';
import { Menu, Dropdown, Button } from 'infrad';
import classNames from 'classnames';
import { IArrowDown, IArrowUp, IAdd, ISetting } from 'infra-design-icons';
import { CustomizedNode, CustomizedNodeList } from '../typings';

interface IDropdownMenuProps {
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
    prefixCls,
    menuList,
    defaultSelectedKey,
    keepSelectedStatus = false,
    suffix,
    menuButtons,
    onMenuChange,
  } = props;

  const [selectedMenu, setSelectedMenu] = useState<string | number | undefined>(defaultSelectedKey);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const menuDom = (
    <Menu onClick={(e) => handleMenuSelect(e.key)} style={{ paddingBottom: menuButtons ? 0 : 8 }}>
      {menuList?.map((item) => (
        <Menu.Item
          key={item.key}
          style={{ color: keepSelectedStatus && selectedMenu === item.key ? '#2673DD' : '' }}
        >
          {item.content}
        </Menu.Item>
      ))}
      {menuButtons ? (
        <Menu.Item
          className={`${prefixCls}-menu-btn`}
          key="btn"
          style={{ color: '#2673DD', border: '1px solid #eee', width: 250 }}
        >
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
        {defaultSelectedKey
          ? (suffix ? `${suffix}:` : '') +
            `${menuList.find((i) => i.key === selectedMenu)?.content}`
          : suffix ?? ''}
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
