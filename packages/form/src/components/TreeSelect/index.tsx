﻿import React from 'react';
import ProField from '../Field';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../interface';
import type { TreeSelectProps } from 'infrad';

/**
 * 级联选择框
 *
 * @param
 */
const ProFormTreeSelect: React.ForwardRefRenderFunction<
  any,
  ProFormFieldItemProps<TreeSelectProps<any>> & ProFormFieldRemoteProps
> = ({ fieldProps, request, params, proFieldProps, ...rest }, ref) => {
  return (
    <ProField
      mode="edit"
      valueType="treeSelect"
      fieldProps={fieldProps}
      ref={ref}
      request={request}
      params={params}
      proFieldProps={proFieldProps}
      {...rest}
    />
  );
};

const WarpProFormTreeSelect: React.FC<
  ProFormFieldItemProps<TreeSelectProps<any>> & ProFormFieldRemoteProps
> = React.forwardRef(ProFormTreeSelect);

export default WarpProFormTreeSelect;
