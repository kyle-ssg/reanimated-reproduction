/**
 * Created by niallquinn on 23/08/2016.
 */

module.exports = {

  imgFluid: {
      width: styleVariables.baseImageWidth,
      height: styleVariables.baseImageHeight,
      flex: 1,
      resizeMode: 'contain',
  },

  imgRounded: {
    borderRadius: styleVariables.baseImageHeight / 2,
    height: styleVariables.baseImageHeight,
    width: styleVariables.baseImageWidth,
    borderColor: pallette.secondary,
    borderWidth: 2,
  }

};
