import countryData from './country-data';
import Tabs from '../base/forms/Tabs';
import TabItem from '../base/forms/TabItem';
import MultiSelect from '../base/forms/MultiSelect';
import StarRating from '../base/StarRating';
import Switch from 'rc-switch';
import Slider from 'react-slider';

const Froms = class extends React.Component {
    displayName: 'Froms'

    constructor (props, context) {
        super(props, context);
        this.state = { tab: 0, slider: 0, isAbsolute: true };
    }

    onSliderChange = (slider) => {
        this.setState({ slider });
    }

    selectTab = (tab) => {
        this.setState({ tab });
    }

    toggleCheck = () => {
        this.setState({ checked: !this.state.checked });
    }

    onAbsoluteChanged = () => {
        this.setState({ isAbsolute: !this.state.isAbsolute });
    }

    onStarChange = (val) => {
        this.setState({ val });
    }

    onSelectChange = (value) => this.setState({ value })

    renderSelectRow = (row, index, selectedRow, highlightRow) => {
        const isSelected = selectedRow === index;
        return (
            <div onMouseOver={()=>highlightRow(index)}>
                <Row space>
                    <Button className={"btn-link " + (!isSelected ? "btn-link-secondary" : "")}>
                        {isSelected ? row.name : <Highlighter search={this.state.search} value={row.name}/>}
                    </Button>
                    {row.code}
                </Row>
            </div>
        );
    }

    renderSelectedItem = (value, remove) => (
        <Row space className="chip">
            <span>{value.name}</span>
            <span onClick={remove} className="chip-icon">
        <span className="fa fa-close"/>
      </span>
        </Row>
    )

    render () {
        return (
            <div>
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
                    onChange={(e)=> {
                        this.setState({ val: Utils.safeParseEventValue(e) });
                    }}
                    isValid={this.state.val}
                    type="text" title="Required"
                    placeholder="Required Input"/>
                <InputGroup
                    onChange={(e)=> {
                        this.setState({ email: Utils.safeParseEventValue(e) });
                    }}
                    isValid={Utils.isValidEmail(this.state.email)}
                    type="text" title="Valid Email"
                    placeholder="Enter an Email"/>
                <InputGroup
                    inputProps={{ mask: "11/11" }} name="expiry" placeholder="dd/yy"
                    title="Masked"/>
                <InputGroup inputProps={{ mask: "11:11 am" }} name="expiry" placeholder="hh:mm am"
                            title="Masked"/>
                <FormGroup title="Bla">
                    <label onClick={this.toggleCheck}>Click</label>
                    <div>
                        <Switch onMouseUp={this.toggleCheck} checked={this.state.checked}/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <StarRating icon={'star'} onChange={this.onStarChange} editable={true} value={this.state.val}
                                max={5}/>
                </FormGroup>
                <Panel title={<h3>Tabs</h3>}>
                    <Tabs value={this.state.tab} onChange={this.selectTab}>
                        <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
                            <h2>Tab 1 content</h2>
                        </TabItem>
                        <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
                            <h2>Tab 2 content</h2>
                        </TabItem>
                    </Tabs>
                </Panel>

                <FormGroup>
                    <FormInline>
                        <Slider onChange={this.onSliderChange} defaultValue={this.state.slider} withBars/>
                        <span>{this.state.slider + ""}</span>
                    </FormInline>
                </FormGroup>

                <Panel title={<h3>MultiSelect</h3>}>
                    Show as popover ?
                    <Switch checked={this.state.isAbsolute} onChange={this.onAbsoluteChanged}/>
                    <MultiSelect
                        placeholder="Select some items"
                        isAbsolute={this.state.isAbsolute}
                        value={this.state.value}
                        onSelectChange={this.onSelectChange}
                        onSearchChange={this.onSearchChange}
                        renderSelectedItem={this.renderSelectedItem}
                        renderRow={this.renderSelectRow}
                        data={countryData}
                    />
                </Panel>

            </div>
        );
    }
};

Froms.propTypes = {};

module.exports = Froms;
