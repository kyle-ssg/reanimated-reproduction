import LocalizedStrings from 'react-native-localization';
import _strings from './common-mobile/strings';

const strings = new LocalizedStrings(_strings);
global.Strings = strings;
