import React from "react";
import cn from "classnames";

interface Column {
  children: React.ReactChildren,
  className: string,
}

//Div with standard horizontal padding
const Column: React.FC<Column> = ( { className, children, ...props } ) => (
    <div {...props} className={cn(className, "flex-column")}>{children}</div>  
);

Column.displayName = "Column";
global.Column = Column;
export default Column;
