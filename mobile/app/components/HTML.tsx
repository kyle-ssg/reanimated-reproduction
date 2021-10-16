// import propTypes from 'prop-types';
import React, { FunctionComponent } from 'react' // we need this to make JSX compile
import _HTML, { defaultSystemFonts } from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { useWindowDimensions } from 'react-native'
import { paddingBase } from '../style/style_grid'

type ComponentType = {
  children: string
  textStyle?: ReactNative.TextStyle
  onLinkPress?: () => void
}

const HTML: FunctionComponent<ComponentType> = ({
  children,
  onLinkPress,
  textStyle,
}) => {
  const _onLinkPress = (e, uri) => {
    if (uri.includes('tel:') || uri.includes('mailto:')) {
      ReactNative.Linking.openURL(uri)
      return
    }
    onLinkPress && onLinkPress()
    ReactNative.Linking.openURL(uri)
  }

  const html =
    children &&
    children.replace(/&nbsp;/g, '').replace(/text-align: justify;/g, '')
  const { width } = useWindowDimensions()

  const systemFonts = [
    ...defaultSystemFonts,
    styleVariables.boldFontFamily,
    styleVariables.semiboldFontFamily,
    styleVariables.normalFontFamily,
    styleVariables.displayFontFamily,
  ]

  return (
    <_HTML
      contentWidth={width}
      enableCSSInlineProcessing={false}
      enableExperimentalMarginCollapsing={true}
      systemFonts={systemFonts}
      tagsStyles={{
        a: {
          color: palette.blue2,
          fontFamily: styleVariables.boldFontFamily,
          fontWeight: 'normal',
        },
        p: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        pre: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        li: {
          fontFamily: styleVariables.normalFontFamily,
          fontWeight: 'normal',
        },
        strong: {
          fontFamily: styleVariables.boldFontFamily,
          fontWeight: 'bold',
        },
        h1: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h2: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h3: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h4: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h5: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        h6: { fontFamily: styleVariables.boldFontFamily, fontWeight: 'bold' },
        img: { maxWidth: width - paddingBase * 4, alignSelf: 'center' },
      }}
      baseStyle={{
        backgroundColor: 'transparent',
        color: palette.blueGrey800,
        fontFamily: styleVariables.normalFontFamily,
        fontWeight: 'normal',
        ...(textStyle || {}),
      }}
      source={{ html }}
      renderersProps={{
        a: {
          onPress: _onLinkPress,
        },
      }}
    />
  )
}

const styles = StyleSheet.create({
  img: {},
})
export default HTML
