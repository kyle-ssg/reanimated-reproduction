import Tabs from '../base/forms/Tabs';
import StarRating from '../base/StarRating';
import Switch from 'rc-switch';

const TheComponent = class extends React.Component {
    displayName:'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = { tab: 0 };
    }

    selectTab = (tab) => {
        this.setState({ tab })
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
                <InputGroup title="Default" placeholder="Test"/>
                <InputGroup title="Inline" inputProps={{ inline: "true" }} placeholder="Test"/>
                <InputGroup inputProps={{inline:true, mask:"11/11"}} name="expiry" placeholder="dd/yy" title="Masked"/>
                <InputGroup inputProps={{inline:true, mask:"11:11 am"}} name="expiry" placeholder="hh:mm am" title="Masked"/>
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
                        <div tabLabel={(
                            <div>
                                <span className="fa fa-phone tab-icon"/>
                            </div>
                        )}>
                            <h2>Tab 1 content</h2>
                        </div>
                        <div tabLabel={
                            <div>
                                <span className="fa fa-envelope-o tab-icon"/>
                            </div>
                        }>
                            <h2>Tab 2 content</h2>
                        </div>
                    </Tabs>
                </Panel>

            </div>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;