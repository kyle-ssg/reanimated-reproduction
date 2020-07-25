/// <reference types="./ion.d.ts" />

import * as ReactNative from 'react-native';
import { View, Animated } from 'react-native'

declare global {
  const ReactNative: typeof ReactNative;
  const Animated: typeof ReactNative.Animated;
  declare let View: React.ComponentType<ReactNative.ViewProps>;
  declare let Animated: ReactNative.Animated;
  declare let Flex: React.ComponentType<ReactNative.ViewProps & {value?:number}>;
  declare let ListItem: React.ComponentType<ReactNative.TouchableOpacityProps>;
  declare let Row: React.ComponentType<ReactNative.ViewProps & {space?:boolean}>;
  declare let TouchableOpacity: React.ComponentType<ReactNative.TouchableOpacityProps>;
  declare let Text: React.ComponentType<ReactNative.TextProps>;
  declare let Fade: React.ComponentType<ReactNative.ViewProps& {value:boolean; children: ReactNode}>;
  declare let ScrollView: React.ComponentType<ReactNative.ScrollViewProps>;
  declare let SafeAreaView: React.ComponentType<ReactNative.ViewProps>;
  declare let Platform: ReactNative.PlatformIOSStatic;
  declare let Dimensions: ReactNative.Dimensions;
  declare let Styles;
  declare let styleVariables;
  declare let routes;
  declare let palette;
  declare let colour;
  declare let em: (value:number)=>number;
}
