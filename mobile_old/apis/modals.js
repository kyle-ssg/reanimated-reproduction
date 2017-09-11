module.exports = function (context) {
  global.openModal = function (Component) {
    context.setState({
      showModal: 1,
      modalComponent: Component,
    });
  }.bind(context);

    global.closeModal = function () {
    context.setState({
      showModal: 0
    });
    setTimeout(function () {
      context.setState({
        modalComponent: null
      });
    }.bind(this), 500);
  }.bind(context);

  global.openSelect = function (Component) {
    context.setState({
      showSelect: 1,
      selectComponent: Component
    });
  }.bind(context);

  global.closeSelect = function () {

    context.setState({
      showSelect: 0
    });
    setTimeout(function () {
      context.setState({
        selectComponent: null
      });
    }.bind(this), 500);
  }.bind(context);

};
