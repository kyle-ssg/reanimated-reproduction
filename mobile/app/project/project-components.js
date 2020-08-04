// Any commonly used project specific components can go here
import ErrorMessage from 'components/ErrorMessage';
global.ErrorMessage = ErrorMessage;

// const LinearGradient = require('react-native-linear-gradient')
const LiniearGradient = () =>
  Alert.alert(
    'Install react-native-linear-gradient and pod install to use this',
  );
global.LinearGradient = LiniearGradient;

import ION from 'react-native-vector-icons/Ionicons';
global.ION = ION;
