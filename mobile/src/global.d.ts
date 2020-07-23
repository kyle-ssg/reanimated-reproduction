/// <reference types="react-native" />
declare let View: React.ComponentType<ReactNative.ViewProps>;
declare let Flex: React.ComponentType<ReactNative.ViewProps & {value:number}>;
declare let Row: React.ComponentType<ReactNative.ViewProps & {space:boolean}>;
declare let TouchableOpacity: React.ComponentType<ReactNative.TouchableOpacityProps>;
declare let Text: React.ComponentType<ReactNative.TextProps>;
declare let Fade: React.ComponentType<ReactNative.ViewProps& {value:boolean; children: ReactNode}>;
declare let ScrollView: React.ComponentType<ReactNative.ScrollViewProps>;
declare let SafeAreaView: React.ComponentType<ReactNative.ViewProps>;
declare let ION: React.ComponentType<ReactNative.TextProps & {name:string}>;
declare let Platform: ReactNative.PlatformIOSStatic;
declare let Dimensions: ReactNative.Dimensions;
declare let Styles;
declare let styleVariables;
declare let routes;
declare let palette;
