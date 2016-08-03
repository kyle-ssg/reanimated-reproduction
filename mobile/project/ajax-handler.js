/**
 * Created by kyle-ssg on 02/03/15.
 */
module.exports = {
  error: function (store, res) {

    if (res.status) {
      switch (res.status) {
        case 401:
          console.log('Unauthorized')
          break;
        case 404:
          //AlertIOS.alert('Error', 'URL Not found: ' + url);
          break;
        case 503:
          //AlertIOS.alert('Error', error);
          break;
        default:
        //AlertIOS.alert('Error', error);

      }
    }

    if (store) {
      store.error = res;
      store.goneABitWest();
    }
  }
};
