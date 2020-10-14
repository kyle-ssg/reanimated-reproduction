import React from "react";
import cn from "classnames";

interface Props {
  className: string;
  children: React.ReactNode;
}

export const TheComponent: React.FC<Props> = ({ className, children }) => (
  <div className={cn(className, "some-custom-class")}>{children}</div>
);

export default TheComponent;
