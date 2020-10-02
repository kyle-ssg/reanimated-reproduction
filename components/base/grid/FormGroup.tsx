import React from "react";
import cn from "classnames";

interface FormGroup {
  className: string,
  children: React.ReactChildren,
}

const FormGroup = ({ className, ...props } ) => (
  //Div with standard vertical padding
    <div {...props} className={cn(className, "form-group")} />
)

FormGroup.displayName = "FormGroup";
global.FormGroup = FormGroup;
export default FormGroup;
