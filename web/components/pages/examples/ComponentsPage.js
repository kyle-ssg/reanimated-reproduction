import Switch from 'rc-switch';
import cn from 'classnames';
import countryData from '../country-data';
import 'rc-slider/assets/index.css';
import AutoComplete from '../../extras/virtualised/AutoComplete';

const Froms = class extends React.Component {
  static displayName = 'ComponentsPage';

  constructor(props, context) {
      super(props, context);
      this.state = { tab: 0, slider: 0, isAbsolute: true, data: countryData, multiData: countryData };
  }

  onSliderChange = (slider) => {
      this.setState({ slider });
  };

  selectTab = (tab) => {
      this.setState({ tab });
  };

  // todo: reinforces need for toggle state util
  toggleCheck = () => {
      this.setState(state => ({ checked: !state.checked }));
  };

  onAbsoluteChanged = () => {
      this.setState(state => ({ isAbsolute: !state.isAbsolute }));
  };

  onStarChange = (val) => {
      this.setState({ val });
  };

  search = (e) => { // simple search
      const search = Utils.safeParseEventValue(e).toLowerCase();
      this.setState({
          search,
          data: countryData.filter(item => (
              item.name.toLowerCase().indexOf(search) > -1
          )),
      });
  };

  searchMulti = (e) => { // simple search
      const search = Utils.safeParseEventValue(e).toLowerCase();
      this.setState({
          search,
          multiData: countryData.filter(item => (
              item.name.toLowerCase().indexOf(search) > -1
          )),
      });
  };

  onSelectChange = value => this.setState({ value });

  onMultiSelectChange = multiValue => this.setState({ multiValue });

  renderMultiSelectRow = (row, index, selectedRow, highlightRow) => {
      const isHovered = selectedRow === index;
      const isActive = this.state.multiValue && this.state.multiValue.indexOf(row) !== -1;
      return (
          <div onMouseOver={() => highlightRow(index)}>
              <Row space>
                  <Button className={cn({
                      'btn-link': true,
                      'btn-link-hover': isHovered,
                      'btn-link-active': isActive,
                  })}
                  >
                      {isHovered ? row.name : <HighlightKeyword search={this.state.search} value={row.name}/>}
                  </Button>

                  <div className="flex-column">
                      {row.code}
                  </div>
              </Row>
          </div>
      );
  };

  renderSelectRow = (row, index, selectedRow, highlightRow) => {
      const isHovered = selectedRow === index;
      const isActive = this.state.value === row;
      return (
          <div onMouseOver={() => highlightRow(index)}>
              <Row space>
                  <Button className={cn({
                      'btn-link': true,
                      'btn-link-hover': isHovered,
                      'btn-link-active': isActive,
                  })}
                  >
                      {isHovered ? row.name : <HighlightKeyword search={this.state.search} value={row.name}/>}
                  </Button>
                  <div className="flex-column">
                      {row.code}
                  </div>
              </Row>
          </div>
      );
  };

  renderSelectedItem = (value, remove) => (
      <Row space className="chip">
          <span>{value.name}</span>
          {/* eslint-disable-next-line */}
      <span onClick={remove} className="chip-icon">
          <span className="ion-ios-close"/>
      </span>
      </Row>
  )

  render() {
      return (
          <div className="container">
              <h2>
          Panel
                  <Tooltip>
                      {'<Panel title="<h3>test</h3>">content</Panel>'}
                  </Tooltip>
              </h2>
              <Panel title={<h3>Test</h3>}>
          body

              </Panel>
              <h2>Inputs</h2>
              <InputGroup type="email" title="Default" placeholder="Test"/>
              <InputGroup
                onChange={(e) => {
                    this.setState({ val: Utils.safeParseEventValue(e) });
                }}
                isValid={this.state.val}
                type="text"
                title="Required"
                placeholder="Required Input"
              />
              <InputGroup
                onChange={(e) => {
                    this.setState({ email: Utils.safeParseEventValue(e) });
                }}
                isValid={Utils.isValidEmail(this.state.email)}
                type="text"
                title="Valid Email"
                placeholder="Enter an Email"
              />
              <InputGroup
                inputProps={{ mask: '11/11' }}
                name="expiry"
                placeholder="dd/yy"
                title="Masked"
              />
              <InputGroup
                inputProps={{ mask: '11:11 am' }}
                name="expiry"
                placeholder="hh:mm am"
                title="Masked"
              />
              <FormGroup title="Bla">
                  <label htmlFor="switch" onClick={this.toggleCheck}>Click</label>
                  <div>
                      <Switch id="switch" onMouseUp={this.toggleCheck} checked={this.state.checked}/>
                  </div>
              </FormGroup>
              <FormGroup>
                  <Panel title={<h3>Single Select</h3>}>
            Show as popover ?
                      <Switch checked={this.state.isAbsolute} onChange={this.onAbsoluteChanged}/>
                      <AutoComplete
                        placeholder="Select some items"
                        isAbsolute={this.state.isAbsolute}
                        value={this.state.value}
                        onSelectChange={this.onSelectChange}
                        onSearchChange={this.search}
                        renderSelectedItem={this.renderSelectedItem}
                        renderRow={this.renderSelectRow}
                        data={this.state.data}
                      />
                  </Panel>
              </FormGroup>
              <FormGroup>
                  <Panel title={<h3>Multi Select</h3>}>
            Show as popover ?
                      <Switch checked={this.state.isAbsolute} onChange={this.onAbsoluteChanged}/>
                      <AutoComplete
                        multiple
                        placeholder="Select some items"
                        isAbsolute={this.state.isAbsolute}
                        value={this.state.multiValue}
                        onSelectChange={this.onMultiSelectChange}
                        onSearchChange={this.searchMulti}
                        renderSelectedItem={this.renderSelectedItem}
                        renderRow={this.renderMultiSelectRow}
                        data={this.state.multiData}
                      />
                  </Panel>
              </FormGroup>
              <FormGroup>
                  <Panel title={<h3>Tabs</h3>}>
                      <Tabs value={this.state.tab} onChange={this.selectTab}>
                          <div tablabel={(<span className="fa fa-phone tab-icon"/>)}>
                              <h2>Tab 1 content</h2>
                          </div>
                          <div tablabel={(<span className="fa fa-phone tab-icon"/>)}>
                              <h2>Tab 2 content</h2>
                          </div>
                      </Tabs>
                  </Panel>
              </FormGroup>

          </div>
      );
  }
};

Froms.propTypes = {};

export default hot(module)(Froms);
