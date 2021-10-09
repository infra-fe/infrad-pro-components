import ProForm, { ProFormSelect } from 'infrad-pro-form';

export default () => {
  return (
    <ProForm.Group>
      <ProFormSelect.SearchSelect
        name="userQuery"
        label="query selector - request"
        fieldProps={{
          labelInValue: true,
          style: {
            minWidth: 140,
          },
        }}
        request={async ({ keyWords = '' }) => {
          return [
            { label: 'All', value: 'all' },
            { label: 'Unsolved', value: 'open' },
            { label: 'Unsolved(Assigned)', value: 'assignees' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Solving', value: 'processing' },
          ].filter(({ value, label }) => {
            return value.includes(keyWords) || label.includes(keyWords);
          });
        }}
      />
      <ProFormSelect.SearchSelect
        name="userQuery2"
        label="query selector - valueEnum"
        fieldProps={{
          style: {
            minWidth: 140,
          },
        }}
        valueEnum={{
          all: { text: 'All', status: 'Default' },
          open: {
            text: 'Unsolved',
            status: 'Error',
          },
          closed: {
            text: 'Resolved',
            status: 'Success',
          },
          processing: {
            text: 'Solving',
            status: 'Processing',
          },
        }}
      />
      <ProFormSelect.SearchSelect
        name="userQuery3"
        label="query selector - options"
        fieldProps={{
          labelInValue: false,
          style: {
            minWidth: 140,
          },
        }}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Unsolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'solving', value: 'processing' },
        ]}
      />
    </ProForm.Group>
  );
};
