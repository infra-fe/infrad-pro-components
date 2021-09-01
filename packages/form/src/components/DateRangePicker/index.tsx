import React from 'react';
import type { RangePickerProps } from 'infrad/lib/date-picker';
import ProField from '../Field';
import { dateArrayFormatter } from '@ant-design/pro-utils';
import type { ProFormFieldItemProps } from '../../interface';

const valueType = 'dateRange';

/**
 * 日期区间选择组件
 *
 * @param
 */
const ProFormDateRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>> = React.forwardRef(
  ({ fieldProps, proFieldProps, ...rest }, ref) => (
    <ProField
      ref={ref}
      mode="edit"
      fieldProps={fieldProps}
      valueType={valueType}
      proFieldProps={proFieldProps}
      filedConfig={{
        valueType,
        lightFilterLabelFormatter: (value) => dateArrayFormatter(value, 'YYYY-MM-DD'),
      }}
      {...rest}
    />
  ),
);

export default ProFormDateRangePicker;
