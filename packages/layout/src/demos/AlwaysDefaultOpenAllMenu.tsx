import React from 'react';

import ProLayout, { PageContainer } from 'infrad-pro-layout';

export default () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      route={{
        routes: [
          {
            path: '/home',
            name: '首页',
            locale: 'menu.home',
            children: [
              {
                path: '/home/overview',
                name: '概述',
                hideInMenu: true,
                locale: 'menu.home.overview',
              },
              {
                path: '/home/search',
                name: '搜索',
                hideInMenu: true,
                locale: 'menu.home.search',
              },
            ],
          },
          {
            path: '/data_hui',
            name: '汇总数据',
            locale: 'menu.data_hui',
            children: [
              {
                collapsed: true,
                menuName: '域买家维度交易',
                name: '域买家维度交易',
                children: [
                  {
                    id: 2,
                    name: '月表',
                    path: '/data_hui2',
                  },
                  {
                    name: '日表',
                    path: '/data_hui3?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                  },
                ],
              },
              {
                name: '维度交易',
                path: '/',
                children: [
                  {
                    name: '月表',
                    path: '/data_hui4',
                  },
                  {
                    name: '日表',
                    key: 'tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                    path: '/data_hui5',
                  },
                ],
              },
            ],
          },
        ],
      }}
      menu={{ defaultOpenAll: true, ignoreFlatMenu: true }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);
