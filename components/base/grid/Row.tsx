import React from "react";
import cn from "classnames";

interface Row {
  className?: string,
  space?: boolean,
  value?: number,
}

const Row: React.FC<Row> = ({ className, children, space, ...props }) => (
  <div {...props} className={cn({ "flex-row": true, space }, className)}>{children}</div>
);

Row.displayName = "Row";
global.Row = Row;
export default Row;
