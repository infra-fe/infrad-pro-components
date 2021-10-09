import React, { useState } from 'react';
import { Card, Input, Tabs } from 'infrad';
import { UpOutlined, DownOutlined } from 'infra-design-icons';
import ProForm, { QueryFilter, ProFormText, ProFormDatePicker } from 'infrad-pro-form';
import styles from './search-filter.module.less';

const { TabPane } = Tabs;

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const { onSearch, onTypeChange, defaultType = 'articles', onFilterChange } = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const quickSearch = ['Mini Program Development', ' Settle In', 'ISV Permission'];
  return (
    <Card
      bodyStyle={{ paddingBottom: 0 }}
      bordered={false}
      className={showFilter ? '' : styles.hiddenFilter}
    >
      <div>
        <Input.Search
          placeholder="Please enter"
          enterButton="Search"
          size="large"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={onSearch}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div className={styles.quickSearch}>
          {quickSearch.map((text) => (
            <span
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            className={styles.filterTrigger}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            Advanced Filter {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
      >
        <TabPane tab="Article" key="articles" />
        <TabPane tab="Program" key="projects" />
        <TabPane tab="Application" key="applications" />
      </Tabs>

      <QueryFilter
        submitter={false}
        span={24}
        labelWidth="auto"
        split
        onChange={onFilterChange}
        className={styles.filter}
      >
        <ProForm.Group title="姓名">
          <ProFormText name="name" />
        </ProForm.Group>
        <ProForm.Group title="详情">
          <ProFormText name="age" label="年龄" />
          <ProFormDatePicker name="birth" label="生日" />
        </ProForm.Group>
      </QueryFilter>
    </Card>
  );
};

export default AdvancedSearch;
