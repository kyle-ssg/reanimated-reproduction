import React, {Component, PropTypes} from 'react';
import Tabs from '../components/base/forms/Tabs';
import TabItem from '../components/base/forms/TabItem';
import Popover from '../components/base/Popover';

const NavTabItem = (props)=>(
  <span value={props.value} className="flex-row row centered-container">
    <span className={`flex-column fa fa-${props.icon} tab-icon`}/>
    <span className="flex-column hidden-xs-down">{props.title}</span>
  </span>
);

NavTabItem.displayName = "NavTabItem";
NavTabItem.propTypes = {
  value: RequiredString,
  title: RequiredString,
  icon: RequiredString
};

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor (props, context) {
    super(props, context);
    firebase.initializeApp(Project.firebase);
    this.state = {};
  }

  selectTab = (tab) => {
    const { history } = this.props;

    switch (tab) {
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('layout');
        break;
      case 2:
        history.push('unknownPage');
        break;
    }
  }

  getSelectedTab = () => {
    const paths = this.props.location.pathname.split('/');
    switch (paths[paths.length == 1 ? 0 : 1]) {
      case '':
        return 0;
      case 'layout':
        return 1;
      default:
        return 2;
    }
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <Tabs value={this.getSelectedTab()} onChange={this.selectTab}>
            <TabItem tabLabel={<NavTabItem value="home" title="Home" icon="home"/>}/>
            <TabItem tabLabel={<NavTabItem value="layout" title="Layout" icon="th"/>}/>
            <TabItem tabLabel={<NavTabItem value="uh" title="404" icon="meh-o"/>}/>
            <TabItem tabLabel={<NavTabItem value="sassinfo" title="BS info" icon="css3"/>}/>
          </Tabs>
          <div className="navbar-right">
            <div className="flex-column">
              <Popover isHover={true} className="popover-right" renderTitle={()=><div className="flex-column fa fa-chevron-down"/>}>
                <span href="test">
                     <Link to="sassinfo">Bootstrap info</Link>
                </span>
              </Popover>
            </div>
          </div>
        </nav>

        <div className="app-container container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: RequiredObject,
  history: RequiredObject,
};
