import React, {Component, PropTypes} from 'react';
import Tabs from '../components/base/forms/Tabs';
import TabItem from '../components/base/forms/TabItem';

const NavTabItem = (props)=>(
  <span value={props.value} className="flex-row row centered-container">
    <span className={`flex-column fa fa-${props.icon} tab-icon`}/>
    <span className="flex-column">{props.title}</span>
  </span>
);

NavTabItem.displayName = "NavTabItem";
NavTabItem.propTypes = {
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

    switch (tab) { //delay pushing route until tab transition completes
      case 0:
        setTimeout(()=>history.push('/'), 500);
        break;
      case 1:
        setTimeout(()=>history.push('layout'), 500);
        break;
      case 2:
        setTimeout(()=>history.push('unknownPage'), 500);
        break;
    }
    this.setState({ tab });
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-light bg-faded">
          <Tabs value={this.state.tab} onChange={this.selectTab}>
            <TabItem tabLabel={<NavTabItem value="home" title="Home" icon="home"/>}/>
            <TabItem tabLabel={<NavTabItem value="layout" title="Layout" icon="th"/>}/>
            <TabItem tabLabel={<NavTabItem value="uh" title="404" icon="meh-o"/>}/>
          </Tabs>
        </nav>

        <div className="app-container container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
