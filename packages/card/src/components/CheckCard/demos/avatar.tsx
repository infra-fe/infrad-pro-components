/**
 * title: 自定义头像
 */

import React from 'react';
import { CheckCard } from 'infrad-pro-card';
import { Avatar } from 'infrad';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <CheckCard
    title="示例标题"
    avatar={<Avatar style={{ backgroundColor: '#7265e6' }} icon={<UserOutlined />} size="large" />}
  />
);
