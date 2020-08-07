import ReactNative from 'react-native';
import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

type ComponentType = ReactNative.TextProps & {}

const TheComponent: FunctionComponent<ComponentType> = (props) => {
  return (
      <ReactNative.Text {...props} style={[Styles.text, props.style]}>
          {props.children}
      </ReactNative.Text>
  );
};

export default TheComponent;
