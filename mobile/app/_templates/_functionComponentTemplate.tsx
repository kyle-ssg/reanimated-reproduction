import React, { FC } from "react"; // we need this to make JSX compile

type ComponentType = {};

const TheComponent: FC<ComponentType> = ({}) => {
  return <></>;
};

TheComponent.displayName = "TheComponent";
export default TheComponent;
