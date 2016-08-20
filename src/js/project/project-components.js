//Useful for components used all the time within a project
window.Divider = require('../components/Divider');
window.Tooltip = require('../components/Toolip');
window.Expand = require('../components/Expand');


const ION = (props) => {
  var classNames = {
  };

  classNames['ion-' + props.name] = true;

  return (
    <span className={cn(classNames)}></span>
  );
};

ION.propTypes = {
  name: React.PropTypes.string
};

window.ION = ION;
