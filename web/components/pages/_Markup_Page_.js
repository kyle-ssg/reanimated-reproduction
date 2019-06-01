import React, { Component } from 'react';

class Examples extends React.Component {
    static displayName = 'Examples';

    static propTypes = {
        children: propTypes.node.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps,
        });
    }

    search = (e) => {
        const search = Utils.safeParseEventValue(e)
            .toLowerCase();
        this.setState({
            search,
            children: _.filter(this.props.children, c => c.type.displayName && c.type.displayName.toLowerCase()
                .indexOf(search) !== -1),
        });
    };

    render() {
        const { state: { children, search } } = this;
        return (
            <div>
                <FormGroup className="pb-2">
                    <Input
                      inputClassName="input--default"
                      type="text"
                      value={search}
                      placeholder="Search for cards or lists..."
                      onChange={this.search}
                    />
                </FormGroup>
                {
                    children.map((child, i) => (
                        <FormGroup>
                            <h3>
                                {child.type.displayName}
                            </h3>
                            {child}
                        </FormGroup>
                    ))
                }
            </div>
        );
    }
}

class MarkupPage extends Component {
    displayName = 'MarkupPage';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Examples>
                    <Panel title={<h3>Test</h3>}>
                        body
                    </Panel>
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
                    <Switch id="switch" onMouseUp={this.toggleCheck} checked={this.state.checked}/>
                    <Tabs value={this.state.tab} onChange={this.selectTab}>
                        <div tablabel={(<span className="fa fa-phone tab-icon"/>)}>
                            <h2>Tab 1 content</h2>
                        </div>
                        <div tablabel={(<span className="fa fa-phone tab-icon"/>)}>
                            <h2>Tab 2 content</h2>
                        </div>
                    </Tabs>
                </Examples>
            </div>
        );
    }
}

export default hot(module)(MarkupPage);
