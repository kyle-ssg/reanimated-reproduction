import {Platform} from 'react-native';
import styleVariables from '../styleVariables';
import em from './style-em';

module.exports = ()=> {
    return {
        flex: {
            flex: 1
        },
        space: {justifyContent: 'space-between'},
        container: {
            paddingLeft: styleVariables.gutter,
            paddingRight: styleVariables.gutter,
            marginTop:Platform.OS == "android" ? StatusBar.currentHeight : 22
        },
        noPad: {
            marginLeft: -styleVariables.gutter / 2,
            marginRight: -styleVariables.gutter / 2
        },
        row: {
            alignSelf: 'stretch',
            flexDirection: 'row',
            alignItems: 'center',
        },
        rowCenter: {
            justifyContent: "center"
        },
        bold: {
            fontWeight: "bold"
        },
        button: {
            height: styleVariables.buttonHeight
        },
        h1: {
            fontSize: em(styleVariables.fontSizeH1)
        },
        h2: {
            fontSize: em(styleVariables.fontSizeH2)
        },
        h3: {
            fontSize: em(styleVariables.fontSizeH3)
        },
        h4: {
            fontSize: em(styleVariables.fontSizeH4)
        },
        h5: {
            fontSize: em(styleVariables.fontSizeH5)
        },
        h6: {
            fontSize: em(styleVariables.fontSizeH6)
        },
        text: {
            fontSize: em(styleVariables.fontSizeDefault),
            fontFamily: 'HelveticaNeue',
            color: styleVariables.color
        },
        textInput: {
            fontSize: em(styleVariables.fontSizeDefault),
            fontFamily: 'HelveticaNeue',
            height:styleVariables.textInputHeight,
            borderBottomWidth:1/PixelRatio.get(),
            color: styleVariables.color
        },
        listContainer: {
            flex: 1,
            backgroundColor: styleVariables.listBackground
        },

        insetList: {
            padding: styleVariables.paddingBase,
            backgroundColor: '#fff'
        },

        listItem: {
            minHeight: 44,
            // justifyContent: 'center',
            alignItems: 'stretch',
            alignSelf:'stretch',
            borderBottomWidth: 1,
            paddingLeft: styleVariables.paddingBase,
            paddingRight: styleVariables.paddingBase,
            borderBottomColor: styleVariables.dividerLight,
            backgroundColor: styleVariables.listBackground,
            paddingTop:styleVariables.paddingBase,
            paddingBottom:styleVariables.paddingBase,
        },

        listItemAlt: {
            minHeight: 44,
            justifyContent: 'center',
            alignItems: 'stretch',
            borderBottomWidth: 1,
            paddingLeft: styleVariables.paddingBase,
            paddingRight: styleVariables.paddingBase,
            borderBottomColor: styleVariables.divider,
            backgroundColor: styleVariables.listBackgroundAlt,
        }
    };

};