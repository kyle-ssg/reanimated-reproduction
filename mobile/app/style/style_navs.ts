import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

const defaultNavigationOptions:NativeStackNavigationOptions = {
    title: "Boilerplate",
    backButtonImage: undefined,
    headerBackTitle: "",
    headerBackTitleVisible: true, // iOS only
    headerShown: true,
    backButtonInCustomView: false,
    headerTranslucent: false,
    headerLargeTitle: false,
    headerTintColor: palette.primary,
    // headerRight?: (props: { tintColor?: string }) => React.ReactNode;
    // headerLeft?: (props: { tintColor?: string }) => React.ReactNode;
    // headerCenter?: (props: { tintColor?: string }) => React.ReactNode;
    headerHideBackButton: false,
    headerHideShadow: false,
    headerLargeTitleHideShadow: false,
    // headerStyle: {
    //     backgroundColor: "white",
    // },
    // headerLargeStyle: {
    //     backgroundColor: "white",
    // },
    headerTitleStyle: {
        // fontFamily: "System",
        // // fontSize: number
        color: "black"
    },
    contentStyle: {
        backgroundColor:'white'
    },
    headerLargeTitleStyle: {
        // fontFamily?: string;
        // fontSize?: number;
        color: "black"
    },
    headerBackTitleStyle: {
        // fontFamil?: string;
        // fontSize?: number;
    },
    headerTopInsetEnabled: true,
    gestureEnabled: true,
    stackPresentation: "push",
    stackAnimation: "default"
};

export default defaultNavigationOptions;
