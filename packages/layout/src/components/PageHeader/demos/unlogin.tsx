import React from 'react';
import { ProPageHeader } from 'infrad-pro-layout';
import { message } from 'infrad';
import { IProduct } from 'infra-design-icons';

export default () => (
  <div style={{ width: '100%' }}>
    <ProPageHeader
      isLogin={false}
      hasNotice={true}
      logo={<IProduct style={{ fontSize: 24 }} />}
      title="Shopee Cloud"
      onLogoClick={() => message.info('logo click')}
    />
  </div>
);
