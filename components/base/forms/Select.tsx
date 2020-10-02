import { PropsType } from "ionicons/dist/types/stencil.core";
import React from "react";

interface Select {
  title: string,
  children?: React.ReactChildren,
}

const Select: React.FC<Select> = ({ title, children, ...props }) => (
    <div className="select">
        <span className="select__text">{title}</span>
        <select {...props}>{children}</select>
    </div>
);

Select.displayName = "Select"
global.Select = Select;
export default Select;

