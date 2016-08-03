/**
 * Created by kylejohnson on 30/07/2016.
 */
const Tabs = class extends React.Component {
    displayName:'Tabs'

    render () {
        return (
            <div className="tabs">
                <div className="tabs-nav">
                    {this.props.children.map((child, i)=> {
                        var isSelected = this.props.value == i;
                        return (
                            <Button
                                key={'button' + i}
                                onClick={()=>this.props.onChange(i)}
                                className={"btn-tab btn-primary" + (isSelected ? ' tab-active' : '')}>
                                {child.props.tabLabel}
                            </Button>
                        );
                    })}
                </div>
                <div className="tab-line" style={{
                    width: 100 / this.props.children.length + "%",
                    left: 100 / this.props.children.length * this.props.value + "%"
                }}/>
                <div className="tabs-content">
                    {this.props.children.map((child, i)=> {
                        var isSelected = this.props.value == i;
                        return (
                            <div key={'content' + i} className={'tab-item' + (isSelected ? ' tab-active' : '')}>
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

Tabs.defaultProps = {
    className: ''
};

Tabs.propTypes = {
    onChange: OptionalFunc,
    children: RequiredElement,
    value: OptionalNumber
};

module.exports = Tabs;