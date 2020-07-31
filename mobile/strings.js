// Use this for localisation Global.Strings.phrase
import LocalizedStrings from 'react-native-localization';
import _strings from 'common/strings';

const strings = new LocalizedStrings(_strings);
global.Strings = strings;
