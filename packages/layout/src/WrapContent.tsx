import type { CSSProperties } from 'react';
import React from 'react';
import { Layout } from 'infrad';
import { ConfigProviderWrap } from 'infrad-pro-provider';
import { ErrorBoundary } from 'infrad-pro-utils';

const WrapContent: React.FC<{
  isChildrenLayout?: boolean;
  className?: string;
  style?: CSSProperties;
  location?: any;
  contentHeight?: number | string;
  ErrorBoundary?: any;
}> = (props) => {
  const { style, className, children } = props;
  const ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return (
    <ConfigProviderWrap autoClearCache>
      {props.ErrorBoundary === false ? (
        <Layout.Content className={className} style={style}>
          {children}
        </Layout.Content>
      ) : (
        <ErrorComponent>
          <Layout.Content className={className} style={style}>
            {children}
          </Layout.Content>
        </ErrorComponent>
      )}
    </ConfigProviderWrap>
  );
};

export default WrapContent;
