import React from 'react';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormTextArea,
} from 'infrad-pro-form';
import { BasicLayout, FooterToolbar, PageContainer } from 'infrad-pro-layout';
import { Card } from 'infrad';
import { SmileOutlined } from 'infra-design-icons';

export default () => {
  return (
    <BasicLayout
      fixSiderbar
      navTheme="light"
      breakpoint={false}
      defaultCollapsed
      pageTitleRender={false}
      menuDataRender={() => [
        {
          path: '/one',
          icon: <SmileOutlined />,
          name: 'Level One',
          children: [
            {
              path: 'two',
              name: 'Level Two',
            },
          ],
        },
      ]}
      layout="mix"
      location={{
        pathname: '/one/two',
      }}
    >
      <PageContainer title="Input Form">
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => console.log(values)}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                label="Signed Customer Name"
                tooltip="No longer than 24"
                placeholder="Please enter name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                label="Contract Title"
                placeholder="Please enter name"
              />
              <ProFormDateRangePicker
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after Stamping',
                  },
                ]}
                width="xs"
                name="chapter"
                label="Effective Way of Contract"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Termination after Fulfillment',
                  },
                ]}
                name="unusedMode"
                label="Contractual Invalidation Method"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText name="project" disabled label="Project Name" initialValue="Project xxxx" />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="QiTu"
            />
            <ProForm.Group>
              <ProFormSelect
                initialValue="money"
                options={[
                  {
                    value: 'money',
                    label: 'Confirm Amount',
                  },
                ]}
                width="xs"
                name="useMode"
                label="Amount Type"
              />
              <ProFormSelect
                options={[
                  {
                    value: '6',
                    label: '6%',
                  },
                  {
                    value: '12',
                    label: '12%',
                  },
                ]}
                initialValue="6"
                width="xs"
                name="taxRate"
                label="Tax Rate"
              />
              <ProFormRadio.Group
                label="Invoice Type"
                name="invoiceType"
                initialValue="invoice"
                options={['Invoice', 'Normal Ticket', 'No Ticket']}
              />
            </ProForm.Group>
            <ProFormUploadButton
              extra="Support Extension Type：.jpg .zip .doc .wps"
              label="Report Attachment"
              name="file"
              title="Uploading File"
            />
            <ProFormDigit width="xs" name="num" label="Number of Contracts" initialValue={5} />
            <ProFormTextArea width="xl" label="Contract Remarks" name="remark" />
          </ProForm>
        </Card>
      </PageContainer>
    </BasicLayout>
  );
};
