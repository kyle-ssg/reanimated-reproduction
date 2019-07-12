import React from 'react';
import countryData from './examples/country-data';

export default hot(module)(class extends React.Component {
  static contextTypes = {
      router: propTypes.object.isRequired,
  };


  constructor(props, context) {
      super(props, context);
      this.state = { tab: 0 };
  }

    static displayName = 'HomePage';

    componentDidMount() {
        API.trackPage(Constants.pages.HOME_PAGE);
    }

    selectTab = (tab) => {
        this.setState({ tab });
    };

  render = () => (
      <div className="app-container container">
            <h1>Hello World</h1>

      </div>
  )
});
