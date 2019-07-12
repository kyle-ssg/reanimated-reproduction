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
          <FormGroup className="mt-5">
              <h4>Typeography</h4>
              <h1>Heading H1</h1>
              <h2>Heading H2</h2>
              <h3>Heading H2</h3>
              <h4>Heading H2</h4>
          </FormGroup>

          <FormGroup className="mt-5">
              <h4>Buttons</h4>
              <Button>Primary</Button>
          </FormGroup>
          <FormGroup>
              <ButtonSecondary className="btn-block">Secondary</ButtonSecondary>
          </FormGroup>

          <FormGroup className="mt-5">
              <h4>Forms</h4>
              <Tabs value={this.state.tab} onChange={this.selectTab}>
                  <div tablabel="Tab 1">
                      <p>Tab 1 content</p>
                  </div>
                  <div tablabel="Tab 2">
                      <p>Tab 2 content</p>
                  </div>
              </Tabs>
          </FormGroup>

      </div>
  )
});
