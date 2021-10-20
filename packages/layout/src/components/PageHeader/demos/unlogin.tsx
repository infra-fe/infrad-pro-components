import React from 'react';
import { PageHeader } from 'infrad-pro-layout';
import { Menu, message } from 'infrad';
import { IIntroduction, IProduct, INoticeOutlined } from 'infra-design-icons';

export default () => (
  <div style={{ width: '100%' }}>
    <PageHeader
      isLogin={false}
      hasNotice={true}
      logo={<IProduct style={{ fontSize: 24 }} />}
      title={'Shopee Cloud'}
      onLogoClick={() => message.info('logo click')}
    />
  </div>
);
