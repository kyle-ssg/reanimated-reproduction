import { Dimensions } from 'react-native';
import asStyle from '../asStyle';

export default asStyle({  //
  // Overlays
  // --------------------------------------------------

  lightboxOuter: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 40,
    height: Dimensions.get("window").height,
  },

  lightbox: {
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    backgroundColor: 'white',
  },

});
