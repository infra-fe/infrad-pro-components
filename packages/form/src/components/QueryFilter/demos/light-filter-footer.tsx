import React from 'react';
import { LightFilter, ProFormText } from 'infrad-pro-form';
import { Button, Radio, Space } from 'infrad';
import type { SizeType } from 'infrad/lib/config-provider/SizeContext';

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>

      <br />
      <br />

      <Space direction="vertical">
        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText
            name="name"
            label="Name"
            footerRender={(_, onClear) => (
              <Button
                onClick={() => {
                  onClear?.();
                }}
              >
                Customized Footer
              </Button>
            )}
          />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText name="name" label="Name" footerRender={false} />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="footer is false"
          footerRender={false}
        >
          <ProFormText name="name" label="Name" />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="Customized Footer"
          footerRender={(_, onClear) => (
            <Button
              onClick={() => {
                onClear?.();
              }}
            >
              Customized Footer
            </Button>
          )}
        >
          <ProFormText name="name" label="Name" />
        </LightFilter>
      </Space>
    </div>
  );
};
