import { Form } from 'infrad';
import type { NamePath } from 'infrad/lib/form/interface';
import type { FormInstance, FormItemProps } from 'infrad';
import set from 'rc-util/lib/utils/set';
import get from 'rc-util/lib/utils/get';
import { useContext, useMemo } from 'react';
import { FormListContext } from '../List';
import { ProFormContext, isDeepEqualReact, merge } from 'infrad-pro-utils';
import type { ProFormInstance } from '../../BaseForm';

declare type RenderChildren<Values = any> = (
  values: Record<string, any>,
  form: ProFormInstance<Values>,
) => React.ReactNode;

export type ProFormDependencyProps = Omit<
  FormItemProps<any>,
  'name' | 'noStyle' | 'children' | 'label'
> & {
  name: NamePath[];
  ignoreFormListField?: boolean;
  children: RenderChildren;
};

const ProFormDependency: React.FC<ProFormDependencyProps> = ({
  name: names,
  children,
  ignoreFormListField,
  ...rest
}) => {
  const context = useContext(ProFormContext);
  // ProFromList 的 field，里面有name和key
  const formListField = useContext(FormListContext);

  // flatten each name into an (string | number)[]
  const flattenNames = useMemo(() => {
    return names.map((itemName: NamePath) => {
      const name = [itemName];

      // ignoreFormListField为 true 或 formListField.name === undefined 时
      // 应从全局取值，要将 names 中各项的路径前缀(formListField.listName)忽略
      if (
        !ignoreFormListField &&
        formListField.name !== undefined &&
        formListField.listName?.length
      ) {
        name.unshift(formListField.listName);
      }

      return name.flat(1);
    });
  }, [formListField.listName, formListField.name, ignoreFormListField, names]);

  return (
    <Form.Item
      {...rest}
      noStyle
      shouldUpdate={(prevValues, nextValues, info) => {
        if (typeof rest.shouldUpdate === 'boolean') {
          return rest.shouldUpdate;
        } else if (typeof rest.shouldUpdate === 'function') {
          return rest.shouldUpdate?.(prevValues, nextValues, info);
        }

        return flattenNames.some((name) => {
          return !isDeepEqualReact(get(prevValues, name), get(nextValues, name));
        });
      }}
    >
      {(form: FormInstance) => {
        let values: Record<string, any> = {};
        for (let i = 0; i < names.length; i++) {
          const pathToGet = flattenNames[i],
            pathToSet = names[i];

          const finalName = [pathToSet].flat(1);
          let value = context.getFieldFormatValueObject?.(pathToGet);
          if (value && Object.keys(value).length) {
            // transform 会生成多余的value，这里需要注入一下
            values = merge({}, values, value);
            if (get(value, pathToGet)) {
              values = set(values, finalName, get(value, pathToGet), false);
            }
          } else {
            value = form.getFieldValue?.(pathToGet);
            if (typeof value !== 'undefined') {
              values = set(values, finalName, value, false);
            }
          }
        }
        return children?.(values, { ...form, ...context });
      }}
    </Form.Item>
  );
};

export default ProFormDependency;
