import React from 'react';
import ProHeader from 'infrad-pro-header';
import { message } from 'infrad';
import { IProduct } from 'infra-design-icons';

const UnloginDemo = () => (
  <div style={{ width: '100%' }}>
    <ProHeader
      isLogin={false}
      hasNotice={true}
      searchable={false}
      logo={<IProduct style={{ fontSize: 24 }} />}
      title="Shopee Cloud"
      onLogoClick={() => message.info('logo click')}
    />
  </div>
);

export default UnloginDemo;
