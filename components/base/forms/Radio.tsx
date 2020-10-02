import React, {
  createContext,
  useContext,
  ReactElement,
} from "react";

const RadioContext = createContext<{
  name: string;
  selectedValue: any;
  onChange: (value: any) => void;
}>(null);
interface RadioProps {
  value: any;
  renderWrapper: (data: object) => ReactElement;
  label: string;
}
export const Radio: React.FC<RadioProps> = (props) => {
  const { name, selectedValue, onChange } = useContext(RadioContext);
  const { value, renderWrapper, label, ...inputProps } = props;
  const optional = {
    checked: value === selectedValue ? true : undefined,
    onChange: () => onChange(value),
  };
  const input = (
      <input
        {...inputProps}
        aria-checked={optional.checked}
        type="radio"
        name={name}
        {...optional}
      />
  );

  return renderWrapper
    ? renderWrapper({
      ...props,
      onChange: optional.onChange,
      radio: input,
      checked: optional.checked,
    })
    : input;
};
interface RadioGroupProps {
  name: string;
  selectedValue: any;
  onChange: (value: any) => void;
  Component: React.ComponentClass<{ role: string }>;
}
export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {
    Component,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectedValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    children,
    ...rest
  } = props;
  return (
      <Component role="radiogroup" {...rest}>
          <RadioContext.Provider value={{ name, selectedValue, onChange }}>
              {children}
          </RadioContext.Provider>
      </Component>
  );
};