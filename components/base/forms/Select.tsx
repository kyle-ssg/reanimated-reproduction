import { PropsType } from "ionicons/dist/types/stencil.core";
import React, { useState } from "react";
import cx from 'classnames'
export type Select = React.SelectHTMLAttributes<any> & {
  title?: string,
  isValid?: boolean,
  touched?: boolean,
  children?: React.ReactNode,
  errorMessage?: string,
  label?:string
}

const Select: React.FC<Select> = ({ title,touched, label,isValid, children, errorMessage, ...props }) => {
  const [shouldValidate, setShouldValidate] = useState<boolean>(false);
  return (
    <>
      {title && (
        <label className="select__text">{title}</label>
      )}
      <div className="select">
        <select {...props}
          onBlur={(e)=>{
                  setShouldValidate(true);
                  props.onBlur && props.onBlur(e)
                }}
          className={cx(`${props.className||""}`,{ invalid: (touched||shouldValidate) && !isValid })}>
          <option value={null}>
            {label||Strings.pleaseSelect}
          </option>
          {children}
        </select>
        <i className="select__icon fas fa-caret-down"></i>
      </div>
    </>
  );
}

Select.displayName = "Select"
global.Select = Select;
export default Select;

