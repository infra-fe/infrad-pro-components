import React, { ReactNode, useState } from 'react';
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

  const [selectedMenu, setSelectedMenu] = useState<string | number | undefined>(defaultSelectedKey);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const menuDom = (
    <Menu
      onClick={(e) => handleMenuSelect(e.key)}
      style={{ paddingBottom: menuButtons || layoutType === 'display' ? 0 : 8 }}
      className={classNames({
        [`${prefixCls}-menu-display`]: layoutType === 'display',
      })}
    >
      <div style={{ maxHeight: 256, overflow: 'auto' }}>
        {menuList?.map((item) => (
          <Menu.Item
            key={item.key}
            style={{ color: keepSelectedStatus && selectedMenu === item.key ? '#2673DD' : '' }}
          >
            {item.content}
          </Menu.Item>
        ))}
      </div>
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
      console.log(key, menuList.find((i) => i.key === key)?.content);
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
