import React, { useState } from 'react';
import { Button, message, Space } from 'infrad';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  DrawerForm,
} from 'infrad-pro-form';
import { PlusOutlined } from 'infra-design-icons';

export default () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >
          <PlusOutlined />
          Modal Display
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDrawerVisit(true);
          }}
        >
          <PlusOutlined />
          Drawer Display
        </Button>
      </Space>
      <ModalForm
        title="Create New Form"
        visible={modalVisit}
        onFinish={async () => {
          message.success('Submit Successfully!');
          return true;
        }}
        onVisibleChange={setModalVisit}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
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
            width="md"
            name="contract"
            label="Contract Title"
            placeholder="Please enter name"
          />
          <ProFormDateRangePicker name="contractTime" label="Contract Effective Time" />
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
            name="useMode"
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
      </ModalForm>
      <DrawerForm
        onVisibleChange={setDrawerVisit}
        title="Create New Form"
        visible={drawerVisit}
        onFinish={async () => {
          message.success('Submit Successfully!');
          return true;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
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
            width="md"
            name="contract"
            label="Contract Name"
            placeholder="Please enter name"
          />
          <ProFormDateRangePicker name="contractTime" label="Contract Effective Time" />
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
            name="useMode"
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
      </DrawerForm>
    </>
  );
};
