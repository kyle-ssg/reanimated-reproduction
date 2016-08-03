/**
 * Created by kylejohnson on 25/07/2016.
 */
module.exports = (url) => { // share to twitter
  window.open('https://twitter.com/intent/tweet?url=' + encodeURI(url), 'name', 'width=600,height=400');
};
