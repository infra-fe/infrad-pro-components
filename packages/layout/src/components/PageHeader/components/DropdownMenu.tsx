import React, { useState } from 'react';
import { Menu, Dropdown } from 'infrad';
import { IArrowDown } from 'infra-design-icons';

interface IDropdownMenuProps {
  prefixCls?: string;
  menuList: { key: string; content: React.ReactNode }[];
  defaultSelectedKey?: string;
  keepSelectedStatus?: boolean;
  suffix: string;
}
const DropdownMenu: React.FC<IDropdownMenuProps> = (props) => {
  const { prefixCls, menuList, defaultSelectedKey, keepSelectedStatus = false, suffix } = props;

  const [selectedMenu, setSelectedMenu] = useState(defaultSelectedKey);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const handleMenuSelect = (key: string) => {
    setSelectedMenu(key);
    setDropdownStatus(false);
  };

  const onVisibleChange = (visible: boolean) => {
    if (visible !== dropdownStatus) {
      setDropdownStatus(visible);
    }
  };

  const menuDom = (
    <Menu
      onClick={(e) => {
        handleMenuSelect(e.key);
      }}
    >
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

  return (
    <Dropdown overlay={menuDom} trigger={['hover']} onVisibleChange={onVisibleChange}>
      <span className={`${prefixCls}-menu`} style={{ color: dropdownStatus ? '#fff' : '' }}>
        {defaultSelectedKey
          ? `${suffix}: ${menuList.find((i) => i.key === selectedMenu)?.content}`
          : suffix}
        <IArrowDown style={{ marginLeft: 7 }} />
      </span>
    </Dropdown>
  );
};
export default DropdownMenu;
