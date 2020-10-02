import React from "react";
import cn from "classnames";

interface Flex {
  className?: string,
  value?: number,
  onClick?: () => void,
}

//Div with flex
const Flex: React.FC<Flex> = (  { className, value = 1, ...props } ) => (
    <div {...props} className={cn({ flex: true },`flex-${value}`,className)}/>
);

Flex.displayName = "Flex";
global.Flex = Flex;
export default Flex;
