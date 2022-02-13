import LocalizedStrings from 'react-native-localization'
import { stringRecords, setStrings } from 'common/strings'

const strings = new LocalizedStrings(stringRecords)

// make strings available to common folder
setStrings(strings)

export { strings as Strings }
