// import propTypes from 'prop-types';
import React, { FunctionComponent } from "react"; // we need this to make JSX compile
import _HTML from 'react-native-render-html';
import { useNavigation } from "@react-navigation/native";
import { WebViewProps } from "react-native-webview";
import { RouteUrls } from "../route-urls";
import { navigate } from "navigation/RootNavigation";

type ComponentType = {
  children:string,
  textStyle?: ReactNative.TextStyle
  onLinkPress?: ()=>void
}

const HTML: FunctionComponent<ComponentType> = ({ children, onLinkPress,textStyle }) => {
  const navigation = useNavigation()
  const _onLinkPress= (e, uri)=>{

    if (uri.includes("tel:")||uri.includes("mailto:")) {
      ReactNative.Linking.openURL(uri)
      return
    }
    onLinkPress && onLinkPress();
    const props:Partial<WebViewProps> = {
      source: {
        uri
      }
    }
    navigate(RouteUrls.web, { webViewProps:props })
  }

  const html = children && children.replace(/&nbsp;/g,"").replace(/text-align: justify;/g,"")
  return (
    <_HTML
      allowFontScaling={false}
      onLinkPress={_onLinkPress}
      tagsStyles={{ img: styles.img, a: Styles.link, p: { marginBottom:0, paddingBottom:0 } }}
      baseFontStyle={textStyle || Styles.text}
      html={html}
      imagesMaxWidth={Dimensions.get('window').width}
    />
  );
};

const styles = StyleSheet.create({
  img: {

  },
});
export default HTML;

