import Tabs from '../base/forms/Tabs';
import TabItem from '../base/forms/TabItem';
import StarRating from '../base/StarRating';
import Switch from 'rc-switch';

const Froms = class extends React.Component {
    displayName:'Froms'

    constructor (props, context) {
        super(props, context);
        this.state = { tab: 0 };
    }

    selectTab = (tab) => {
        this.setState({ tab });
    }

    toggleCheck = () => {
        this.setState({ checked: !this.state.checked });
    }

    onValChange = (val) => {
        this.setState({ val });
    }

    render () {
        return (
            <div>
                <h2>Panel</h2>
                <Panel title={<h3>Test</h3>}>
                    body
                </Panel>
                <h2>Inputs</h2>
                <InputGroup type="email" title="Default" placeholder="Test"/>
                <InputGroup
                    onChange={(e)=> {this.setState({ val:Utils.safeParseEventValue(e) })}}
                    isValid={this.state.val}
                    type="text" title="Required"
                    placeholder="Required Input"/>
                <InputGroup
                    onChange={(e)=> {this.setState({ email:Utils.safeParseEventValue(e) })}}
                    isValid={Utils.isValidEmail(this.state.email)}
                    type="text" title="Valid Email"
                    placeholder="Enter an Email"/>
                <InputGroup inputProps={{ mask: "11/11" }} name="expiry" placeholder="dd/yy"
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
                    <StarRating icon={'star'} onChange={this.onValChange} editable={true} value={this.state.val}
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

            </div>
        );
    }
};

Froms.propTypes = {};

module.exports = Froms;