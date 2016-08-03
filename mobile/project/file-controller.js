/**
 * Created by kylejohnson on 12/05/2016.
 */
var ImagePickerManager = React.NativeModules.ImagePickerManager;
var parseFile = require("./parseFile");
var configs = {
  post: {
    title: 'Select Image', // specify null or empty string to remove the title
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take a Terrible Photo...', // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
    cameraType: 'back', // 'front' or 'back'
    mediaType: 'photo', // 'photo' or 'video'
    maxWidth: 1242, // photos only
    maxHeight: 1242, // photos only
    aspectX: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    quality: 0.8, // 0 to 1, photos only
    allowsEditing: true, // Built in functionality to resize/reposition the image after selection
    noData: false // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  },
  avatar: {
    title: 'Select Avatar', // specify null or empty string to remove the title
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take a Terrible Photo...', // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
    cameraType: 'back', // 'front' or 'back'
    mediaType: 'photo', // 'photo' or 'video'
    maxWidth: 300, // photos only
    maxHeight: 300, // photos only
    aspectX: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    quality: 0.8, // 0 to 1, photos only
    allowsEditing: true, // Built in functionality to resize/reposition the image after selection
    noData: false // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  }
};

module.exports = {
  uploadAvatar: function (cb) {
    ImagePickerManager.showImagePicker(configs.avatar, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else {
        cb(parseFile(response));
      }
    });
  },
  uploadPost: function (cb) {
    ImagePickerManager.showImagePicker(configs.post, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else {
        cb(parseFile(response));
      }
    });
  }
}
