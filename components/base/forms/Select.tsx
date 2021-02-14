import { PropsType } from "ionicons/dist/types/stencil.core";
import React from "react";
import cx from 'classnames'
export type Select = React.SelectHTMLAttributes<any> & {
  title?: string,
  children?: React.ReactNode,
  errorMessage?: string,
  label?:string
}

const Select: React.FC<Select> = ({ title, label, children, errorMessage, ...props }) => (
    <div className="select">
        {title && (
          <span className="select__text">{title}</span>
        )}
        <select {...props} className={cx(`${props.className||""}`,{ error:!!errorMessage })}>
          <option value={null}>
            {label||"Please select"}
          </option>
          {children}
        </select>
    </div>
);

Select.displayName = "Select"
global.Select = Select;
export default Select;

